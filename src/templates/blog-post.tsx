import * as React from 'react'
import { LayoutProps } from '../components/Layout'
import { MarkdownRemark, MarkdownRemarkConnection, Site, DataJson } from '../graphql-types'
import { get } from 'lodash'
import { withLayout } from '../containers/LayoutContainer'
import { graphql } from 'gatsby'
interface BlogPostProps extends LayoutProps {
  data: {
    post: MarkdownRemark
    recents: MarkdownRemarkConnection
    site: Site
    dataJson: DataJson
  }
}
const BlogPost = (props: BlogPostProps) => {
  const { frontmatter, html, timeToRead } = props.data.post
  const recents = props.data.recents.edges.map(({ node }) => {
    const recentCover = get(node, 'frontmatter.image.children.0.fixed', {})
  })
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
export default withLayout(BlogPost, false)

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        tags
        title
        updatedDate(formatString: "YYYY年MM月DD日")
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
