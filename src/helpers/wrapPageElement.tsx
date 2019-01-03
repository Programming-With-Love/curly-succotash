import * as React from 'react'
import ConnectedLayout from '../containers/LayoutContainer'
export default ({ element, props }: any) => {
  return <ConnectedLayout {...props}>{element}</ConnectedLayout>
}
