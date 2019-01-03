import * as React from 'react'
import { Provider } from 'react-redux'
import createStore from './createStore'
const store = createStore()
const AppProvider = (props: { children: any }) => <Provider store={store}>{props.children}</Provider>

export default AppProvider
