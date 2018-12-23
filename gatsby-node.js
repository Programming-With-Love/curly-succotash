const { uniq, compact } = require('lodash')

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
      const [basePath, name] = fileNode.relativePath.split('/')
      slug = `/${basePath}/${name}/`
      break
  }
   if (slug) {
    createNodeField({ node, name: `slug`, value: slug })
  }
}
