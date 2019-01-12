import * as React from 'react'
import { graphql } from 'gatsby'
import { WithLayout } from '../containers/LayoutContainer'
import { HeaderType } from '../contants/header'

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
      <WithLayout headerType={HeaderType.AUTHOR_HEADER}>
        <div className="">
          {tags.group.map((tag, index) => (
            <h3 key={index}>
              {tag.fieldValue}({tag.totalCount})
            </h3>
          ))}
        </div>
      </WithLayout>
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
