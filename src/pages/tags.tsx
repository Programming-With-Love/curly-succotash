import * as React from 'react'
import { graphql } from 'gatsby'

export interface TagsPageProps {
  data: {
    tags: {
      group: Array<{
        fieldValue: string
        totalCount: number
      }>
    }
  }
}

export default class TagsPage extends React.Component<TagsPageProps> {
  render() {
    const { tags } = this.props.data
    return (
      <div>
        {tags.group.map((tag, index) => (
          <h3 key={index}>{tag.fieldValue}</h3>
        ))}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query {
    tags: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
