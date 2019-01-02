import React from 'react'
import { Provider } from 'react-redux'

import createStore from './src/store/createStore'

const store = createStore()
export const wrapRootElement = ({ element }) => {
  return <div id="rooooot"><Provider store={store}>{element}</Provider></div>
}