import * as React from 'react'
import { LayoutProps } from '../components/Layout'
import { MarkdownRemark, MarkdownRemarkConnection, Site, DataJson, ImageSharp, Query } from '../graphql-types'
import { mapDispatchToProps, HeaderDisptacherProps, WithLayout } from './LayoutContainer'
import BlogPost from '../components/BlogPost'
import { HeaderType } from '../contants/header'
import { connect } from 'react-redux'
interface BlogPostProps extends LayoutProps, HeaderDisptacherProps {
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

export default (props: BlogPostProps) => {
  const { post, dataJson } = props.data
  const { slug } = post.fields
  console.log(slug)
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
