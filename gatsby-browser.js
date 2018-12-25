import React from 'react'
import { Provider } from 'react-redux'

import { store } from './src/store'
import Layout from './src/components/Layout'

export const wrapRootElement = ({ element }) => <Provider store={store}>{element}</Provider>

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
