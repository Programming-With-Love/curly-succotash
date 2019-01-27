import * as React from 'react'
import { Provider } from 'react-redux'
import createStore from './createStore'
const AppProvider = (props: any) => {
  console.log('-----------------create store---------------')
  const store = createStore()
  return <Provider store={store}>{props.children}</Provider>
}

export default AppProvider
