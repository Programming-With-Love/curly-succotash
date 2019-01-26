import * as React from 'react'
import { LayoutProps } from '../components/Layout'
import { MarkdownRemark, MarkdownRemarkConnection, Site, DataJson, ImageSharp, Query } from '../graphql-types'
import { WithLayout } from '../containers/LayoutContainer'
import BlogPost from '../components/BlogPost'
import { graphql, StaticQuery } from 'gatsby'
import { HeaderType } from '../contants/header'
import Position from '../components/base/Position'
interface BlogPostProps extends LayoutProps {
  data: {
    post: MarkdownRemark
    recents: MarkdownRemarkConnection
    site: Site
    dataJson: DataJson
  }
  pageContext: {
    header: ImageSharp
  }
}
const PostPage = (props: BlogPostProps) => {
  const { post, dataJson } = props.data
  const { slug } = post.fields
  const gitmentOptions = dataJson.gitment
  return (
    <WithLayout
      headerType={HeaderType.POST_HEADER}
      data={{
        ...post.frontmatter,
        image: props.pageContext.header.children[0] as ImageSharp,
      }}
    >
      <BlogPost slug={slug} commentOptions={gitmentOptions} post={post} />
    </WithLayout>
  )
}

export default PostPage
