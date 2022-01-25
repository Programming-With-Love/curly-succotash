const React = require('react')
const { renderToString } = require('react-dom/server')
import AppProvider from './src/store/provider'
import wrapPageElementWithTransition from './src/helpers/wrapPageElement'
export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => <AppProvider>{bodyComponent}</AppProvider>
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}

export const wrapPageElement = wrapPageElementWithTransition
