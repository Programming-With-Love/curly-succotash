import { createStore } from 'redux'
import rootReducer from '../reducers/index'

export default () => {
  let w: {
    __REDUX_DEVTOOLS_EXTENSION__?: any
    devToolsExtension?: boolean
  } = {}
  if (typeof window !== `undefined`) {
    w = window as unknown as Window & {
      __REDUX_DEVTOOLS_EXTENSION__: any
      devToolsExtension: boolean
    }
  }
  const devtools =
    process.env.NODE_ENV === 'development' && w.devToolsExtension
      ? w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  return createStore(rootReducer, devtools)
}
