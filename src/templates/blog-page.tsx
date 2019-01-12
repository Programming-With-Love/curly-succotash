import Blog from '../containers/BlogContainer'
import { graphql } from 'gatsby'
import { withLayout } from '../containers/LayoutContainer'

export default Blog

export const pageQuery = graphql`
  query TemplateBlogPage($skip: Int) {
    # Get tags
    tags: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: { frontmatter: { draft: { ne: true } }, fileAbsolutePath: { regex: "/blog/" } }
      limit: 10
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          wordCount {
            words
          }
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            updatedDate(formatString: "YYYY年MM月DD日")
            tags
            origin
            image {
              children {
                ... on ImageSharp {
                  fixed(width: 680, height: 440) {
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
    dataJson {
      author {
        avatar {
          children {
            ... on ImageSharp {
              fixed(width: 35, height: 35) {
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
`
