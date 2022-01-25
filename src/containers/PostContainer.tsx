import * as React from 'react'
import { LayoutProps } from '../components/Layout'
import { HeaderDisptacherProps, WithLayout } from './LayoutContainer'
import BlogPost from '../components/BlogPost'
import { HeaderType } from '../contants/header'
interface BlogPostProps extends LayoutProps, HeaderDisptacherProps {
  data: {
    post: any
    recents: any
    site: any
    dataJson: any
  }
  pageContext: {
    header: any
  }
}

export default (props: BlogPostProps) => {
  const { post, dataJson } = props.data
  const { slug } = post.fields
  const gitmentOptions = dataJson.gitment
  return (
    <WithLayout
      headerType={HeaderType.POST_HEADER}
      data={{
        ...post.frontmatter,
        image: props.pageContext.header,
      }}
    >
      <BlogPost slug={slug} commentOptions={gitmentOptions} post={post} />
    </WithLayout>
  )
}
