import * as React from 'react'
import { Query, MarkdownRemark } from '../graphql-types'
import { WithLayout } from '../containers/LayoutContainer'
import { HeaderType } from '../contants/header'
import Archives from '../components/Archives'
import Main from '../components/Main'
import Position from '../components/base/Position'
export interface IArchive {
  year: number
  posts: Array<MarkdownRemark>
}
export default (props: {
  data: Query
  pageContext: {
    archives: Array<IArchive>
    totalCount: number
  }
}) => {
  return (
    <WithLayout headerType={HeaderType.AUTHOR_HEADER}>
      <Position title="归档" />
      <Main>
        <Archives archives={props.pageContext.archives} />
      </Main>
    </WithLayout>
  )
}
