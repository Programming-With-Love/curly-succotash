const slash = require('slash')
const { kebabCase, uniq, get, compact, times, findIndex } = require('lodash')
const { readdirSync, statSync, fstat, exists, existsSync } =
  require('fs')
const { relative, join, dirname, resolve: pathResolve } = require('path')

const POSTS_PER_PAGE = 10
const cleanArray = arr => compact(uniq(arr))

const unfold = (f, initState) =>
  f((value, nextState) => [value, ...unfold(f, nextState)]
    , () => []
    , initState
  )

const None =
  Symbol()

const relativePaths = (path = '.') =>
  readdirSync(path).map(p => join(path, p))

const traverseDir = (dir) =>
  unfold
    ((next, done, [path = None, ...rest]) =>
      path === None
        ? done()
        : next(path
          , statSync(path).isDirectory()
            ? relativePaths(path).concat(rest)
            : rest
        )
      , relativePaths(dir)
    )

let defaultHeaders = traverseDir(`${__dirname}/data/headers`)


function checkNodeHeader(node) {
  return node.frontmatter.image
    && existsSync(join(dirname(node.fileAbsolutePath), node.frontmatter.image))
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
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
      let slug = '/' + filepath.join('/').replace(' ', '-') + '/'
      createNodeField({ node, name: 'slug', value: slug, })
      if (node.frontmatter.image) {
        if (existsSync(join(dirname(node.fileAbsolutePath), node.frontmatter.image))) {
          createNodeField({ node, name: 'image', value: node.frontmatter.image })
          break
        }
        console.warn(`header image file is not exists in [${node.fileAbsolutePath}] ,header image is [${node.frontmatter.image}],and will generate a random image`)
      }
      const index = Math.floor(Math.random() * defaultHeaders.length)
      let header = defaultHeaders[index]
      header = relative(dirname(node.fileAbsolutePath), header)
      createNodeField({ node, name: 'image', value: header, })
      break
  }
}

let indexContext = {
  headers: {}
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  createPage({
    ...page,
    context: {
      ...page.context,
      headers: indexContext.headers,
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const templates = ['draftsPage', 'blogPost', 'tagPage', 'blogPage', 'blogArchives'].reduce((mem, templateName) => {
      return Object.assign({}, mem, { [templateName]: pathResolve(`src/templates/${kebabCase(templateName)}.tsx`) })
    }, {})

    graphql(
      `
        {
          posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___createdDate] }){
            edges {
              node {
                fields {
                  slug
                  image {
                    childImageSharp {
                      gatsbyImageData(width: 680, height: 440)
                    }
                  }
                }
                frontmatter {
                  title
                  tags
                  createdDate(formatString: "YYYY-MM-DD")
                  draft
                }
              }
            }
          }
          allFile(filter: { absolutePath: { regex: "/.+(jpg|jpeg|png)$/" } }) {
            totalCount
            edges {
              node {
                name
                childrenImageSharp {
                  gatsbyImageData(width: 680, height: 440)
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
        let header = post.fields.image.childImageSharp.gatsbyImageData
        let context = {
          slug: post.fields.slug,
          header,
        }
        createPage({
          path: post.fields.slug,
          component: slash(templates.blogPost),
          context,
        })
        indexContext.headers[post.fields.slug] = header
      })

      createPage({
        path: '/drafts/',
        component: slash(templates.draftsPage),
        context: indexContext,
      })

      // Create tags pages
      blogPosts
        .reduce((mem, post) => cleanArray(mem.concat(get(post, 'frontmatter.tags'))), [])
        .forEach(tag => {
          createPage({
            path: `/blog/tag/${kebabCase(tag)}/`,
            component: slash(templates.tagPage),
            context: {
              tag,
              headers: indexContext.headers,
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
            headers: indexContext.headers,
          },
        })
      })
      // Create archives pages
      const archives = []
      blogPosts.forEach(node => {
        if (node.frontmatter.draft) {
          return
        }
        const year = node.frontmatter.createdDate.slice(0, 4)
        const index = findIndex(archives, obj => obj.year === year)
        if (index !== -1) {
          archives[index].posts.push(node)
        } else {
          archives.push({
            year,
            posts: [node],
          })
        }
      })
      createPage({
        path: '/archives/',
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
