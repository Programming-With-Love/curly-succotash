import React from 'react'
import { Provider } from 'react-redux'

import createStore from './src/store/createStore'
import ConnectedLayout from './src/containers/LayoutContainer'

const store = createStore()
export const wrapRootElement = ({ element }) => <Provider store={store}>{element}</Provider>

export const wrapPageElement = ({ element, props }) => {
  return <ConnectedLayout {...props}>{element}</ConnectedLayout>
}
