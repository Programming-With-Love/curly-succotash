import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { WithLayout } from '../containers/LayoutContainer'
import { HeaderType } from '../contants/header'
import Position from '../components/base/Position'
import Main from '../components/Main'
import TagsCard from '../components/TagsCard'
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
        <Position title="标签云" />
        <Main>
          <TagsCard
            tagSize="large"
            tags={tags.group.map(tag => ({
              name: tag.fieldValue,
              count: tag.totalCount,
            }))}
            Link={Link}
          />
        </Main>
      </WithLayout>
    )
  }
}

export const pageQuery = graphql`
  {
    tags: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags, limit: 3) {
        fieldValue
        totalCount
      }
    }
  }
`
