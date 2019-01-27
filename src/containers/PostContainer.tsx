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

// class PostPage extends React.Component<BlogPostProps> {
//   constructor(props: BlogPostProps) {
//     super(props)
//     const { post } = this.props.data
//     this.props.showHeader(HeaderType.POST_HEADER, {
//       ...post.frontmatter,
//       image: this.props.pageContext.header.children[0] as ImageSharp,
//     })
//   }
//   render() {}
// }

export default (props: BlogPostProps) => {
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
      location={props.location}
    >
      <BlogPost slug={slug} commentOptions={gitmentOptions} post={post} />
    </WithLayout>
  )
}
