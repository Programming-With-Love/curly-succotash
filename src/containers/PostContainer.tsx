import * as React from 'react'
import { LayoutProps } from '../components/Layout'
import { MarkdownRemark, MarkdownRemarkConnection, Site, DataJson, ImageSharp, Query } from '../graphql-types'
import { WithLayout } from '../containers/LayoutContainer'
import BlogPost from '../components/BlogPost'
import { graphql, StaticQuery } from 'gatsby'
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
  const { slug } = post.fields
  const gitmentOptions = dataJson.gitment
  return (
    <StaticQuery
      query={graphql`
        {
          allFile(filter: { absolutePath: { regex: "/headers/" } }) {
            totalCount
            edges {
              node {
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
      `}
      render={(d: Query) => {
        let image
        if (!post.frontmatter.image) {
          const covers = d.allFile.edges.map(edge => edge.node.children[0] as ImageSharp)
          const index = Math.floor(Math.random() * covers.length)
          image = covers[index]
        } else {
          image = post.frontmatter.image.children[0] as ImageSharp
        }
        return (
          <WithLayout
            headerType={HeaderType.POST_HEADER}
            data={{
              ...post.frontmatter,
              image,
            }}
          >
            <BlogPost slug={slug} commentOptions={gitmentOptions} post={post} />
          </WithLayout>
        )
      }}
    />
  )
}

export default PostPage
