import * as React from 'react'
import Blog, { IndexProps } from '../containers/BlogContainer'
import { graphql } from 'gatsby'
import { WithLayout } from '../containers/LayoutContainer'
import { HeaderType } from '../contants/header'
import Position from '../components/base/Position'
export default (props: IndexProps) => (
  <WithLayout headerType={HeaderType.AUTHOR_HEADER}>
    <Position />
    <main>
      <Blog {...props} />
    </main>
  </WithLayout>
)
export const pageQuery = graphql`
  query PageBlog {
    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: { frontmatter: { draft: { ne: true } }, fileAbsolutePath: { regex: "/blog/" } }
      limit: 10
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
