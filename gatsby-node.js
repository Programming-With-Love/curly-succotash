const path = require('path')
const slash = require('slash')
const { kebabCase, uniq, get, compact, times } = require('lodash')

// Don't forget to update hard code values into:
// - `templates/blog-page.tsx:23`
// - `pages/blog.tsx:26`
// - `pages/blog.tsx:121`
const POSTS_PER_PAGE = 10
const cleanArray = arr => compact(uniq(arr))

// Create slugs for files.
// Slug will used for blog page path.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  switch (node.internal.type) {
    case `MarkdownRemark`:
      const fileNode = getNode(node.parent)
      const filepath = fileNode.relativePath.split('/')
      //第一层的markdown文件直接使用文件名做为路径
      if (filepath.length == 1) {
        filepath[0] = filepath[0].substring(0, filepath[0].indexOf('.'))
      } else {
        filepath.splice(filepath.length - 1)
      }
      slug = '/' + filepath.join('/') + '/'
      break
  }
  if (slug) {
    createNodeField({ node, name: `slug`, value: slug })
  }
}

// Implement the Gatsby API `createPages`.
// This is called after the Gatsby bootstrap is finished
// so you have access to any information necessary to
// programatically create pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const templates = ['blogPost', 'tagsPage', 'blogPage', 'blogArchives'].reduce((mem, templateName) => {
      return Object.assign({}, mem, { [templateName]: path.resolve(`src/templates/${kebabCase(templateName)}.tsx`) })
    }, {})

    graphql(
      `
        {
          posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___createdDate] }) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  tags
                  createdDate(formatString: "YYYY-MM-DD")
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        return reject(result.errors)
      }
      const posts = result.data.posts.edges.map(p => p.node)
      // 确认是博文的页面
      const blogPosts = posts.filter(post => post.fields.slug.startsWith('/blog/'))
      // 创建文章页面，所有的markdown文件都会创建，可以通过markdown文件创建其他的静态页面，类似【关于我】页面
      posts.forEach(post => {
        createPage({
          path: post.fields.slug,
          component: slash(templates.blogPost),
          context: {
            slug: post.fields.slug,
          },
        })
      })

      // Create tags pages
      blogPosts
        .reduce((mem, post) => cleanArray(mem.concat(get(post, 'frontmatter.tags'))), [])
        .forEach(tag => {
          createPage({
            path: `/blog/tags/${kebabCase(tag)}/`,
            component: slash(templates.tagsPage),
            context: {
              tag,
            },
          })
        })

      // Create blog pagination
      const pageCount = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
      times(pageCount, index => {
        createPage({
          path: `/blog/page/${index + 1}/`,
          component: slash(templates.blogPage),
          context: {
            skip: index * POSTS_PER_PAGE,
          },
        })
      })
      // Create archives pages
      const archives = {}
      blogPosts.forEach(node => {
        const year = node.frontmatter.createdDate.slice(0, 4)
        if (!archives[`${year}`]) {
          archives[`${year}`] = []
        }
        archives[`${year}`].push(node)
      })
      createPage({
        path: 'archives',
        component: slash(templates.blogArchives),
        context: {
          archives,
          totalCount: blogPosts.length,
        },
      })
      resolve()
    })
  })
}
