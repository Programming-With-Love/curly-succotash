import { graphql } from 'gatsby'
import PostPage from '../containers/PostContainer'

export default PostPage

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    dataJson {
      gitment {
        owner
        repo
        oauth {
          client_id
          client_secret
        }
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      # 摘要
      excerpt
      timeToRead
      fields {
        slug
      }
      headings {
        value
        depth
      }
      frontmatter {
        title
        tags
        origin
        updatedDate(formatString: "YYYY年MM月DD日")
        image {
          children {
            ... on ImageSharp {
              fixed(width: 720, quality: 100) {
                src
                srcSet
              }
            }
          }
        }
      }
    }
    recents: allMarkdownRemark(
      filter: {
        fields: { slug: { ne: $slug } }
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            image {
              children {
                ... on ImageSharp {
                  fixed(width: 300, height: 100) {
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
  }
`
