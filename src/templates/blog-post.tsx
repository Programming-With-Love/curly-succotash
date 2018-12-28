import * as React from 'react'
import { LayoutProps } from '../components/Layout'
import { MarkdownRemark, MarkdownRemarkConnection, Site, DataJson } from '../graphql-types'
import { get } from 'lodash'
import { withLayout } from '../containers/LayoutContainer'
interface BlogPostProps extends LayoutProps {
  data: {
    post: MarkdownRemark
    recents: MarkdownRemarkConnection
    site: Site
    dataJson: DataJson
  }
}
const BlogPost = (props: BlogPostProps) => {
  // const { frontmatter, html, timeToRead } = props.data.post
  // const recents = props.data.recents.edges.map(({ node }) => {
  //   const recentCover = get(node, 'frontmatter.image.children.0.fixed', {})
  // })
  return <div />
}
export default withLayout(BlogPost, false)
