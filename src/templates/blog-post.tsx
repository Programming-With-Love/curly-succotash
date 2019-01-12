import * as React from 'react'
import { LayoutProps } from '../components/Layout'
import { MarkdownRemark, MarkdownRemarkConnection, Site, DataJson } from '../graphql-types'
import { get } from 'lodash'
import { WithLayout } from '../containers/LayoutContainer'
import BlogPost from '../components/BlogPost'
import { graphql } from 'gatsby'
import { HeaderType } from '../contants/header'
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
  return (
    <WithLayout headerType={HeaderType.POST_HEADER} data={post.frontmatter}>
      <BlogPost slug={slug} commentOptions={gitmentOptions} post={post} />
    </WithLayout>
  )
}

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
