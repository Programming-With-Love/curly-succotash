import Blog from '../containers/BlogContainer'
import { graphql } from 'gatsby'
import { withLayout } from '../containers/LayoutContainer'
export default withLayout(Blog, true)

export const pageQuery = graphql`
  query PageBlog {
    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: { frontmatter: { draft: { ne: true } }, fileAbsolutePath: { regex: "/blog/" } }
      limit: 10
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
    # json data
    dataJson {
      author {
        avatar {
          children {
            ... on ImageSharp {
              fixed(width: 80, height: 80) {
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
