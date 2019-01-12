import * as React from 'react'
import { Query } from '../graphql-types'
import { WithLayout } from '../containers/LayoutContainer'
import { HeaderType } from '../contants/header'
export default (props: { data: Query }) => (
  <WithLayout headerType={HeaderType.AUTHOR_HEADER}>
    <div />
  </WithLayout>
)
