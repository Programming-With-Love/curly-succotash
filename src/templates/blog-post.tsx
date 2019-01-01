import * as React from 'react'
import { LayoutProps } from '../components/Layout'
import { MarkdownRemark, MarkdownRemarkConnection, Site, DataJson } from '../graphql-types'
import { get } from 'lodash'
import { withLayout } from '../containers/LayoutContainer'
import BlogPost from '../components/BlogPost'
import { graphql } from 'gatsby'
interface BlogPostProps extends LayoutProps {
  data: {
    post: MarkdownRemark
    recents: MarkdownRemarkConnection
    site: Site
    dataJson: DataJson
  }
}
const PostPage = (props: BlogPostProps) => {
  const { post, dataJson } = props.data
  const recents = props.data.recents.edges.map(({ node }) => {
    const recentCover = get(node, 'frontmatter.image.children.0.fixed', {})
  })
  const { slug } = post.fields
  const gitmentOptions = dataJson.gitment
  return <BlogPost slug={slug} commentOptions={gitmentOptions} post={post} />
}
export default withLayout(PostPage, false)

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
        tags
        title
        updatedDate(formatString: "YYYY年MM月DD日")
        origin
        image {
          children {
            ... on ImageSharp {
              fixed(width: 900, height: 300, quality: 100) {
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
