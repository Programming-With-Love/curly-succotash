import * as React from 'react'
import { graphql } from 'gatsby'
import Blog, { IndexProps } from '../containers/BlogContainer'
import { WithLayout } from '../containers/LayoutContainer'
import { HeaderType } from '../contants/header'
import Position from '../components/base/Position'
const TagPage = (
  props: IndexProps & {
    pageContext: {
      tag: string
    }
  }
) => {
  return (
    <WithLayout
      headerType={HeaderType.POST_HEADER}
      data={{
        title: props.pageContext.tag,
      }}
    >
      <Position title={props.pageContext.tag} />
      <Blog {...props} />
    </WithLayout>
  )
}
export default TagPage

export const pageQuery = graphql`
  query tagTemplate($tag: String!) {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: { frontmatter: { draft: { ne: true }, tags: { in: [$tag] } }, fileAbsolutePath: { regex: "/blog/" } }
    ) {
      totalCount
      edges {
        node {
          wordCount {
            words
          }
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            updatedDate(formatString: "YYYY年MM月DD日")
            tags
            origin
          }
        }
      }
    }
  }
`
