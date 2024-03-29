import * as React from 'react'
import { WithLayout } from '../containers/LayoutContainer'
import { HeaderType } from '../contants/header'
import Archives from '../components/Archives'
import Main from '../components/Main'
import Position from '../components/base/Position'
export interface IArchive {
  year: number
  posts: any[]
}
export default (props: {
  data: any
  pageContext: {
    archives: IArchive[]
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
