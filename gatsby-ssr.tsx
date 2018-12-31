const React = require('react')
const { Provider } = require('react-redux')
const { renderToString } = require('react-dom/server')

const { store } = require('./src/store')

console.log('ok')

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => <Provider store={store}>{bodyComponent}</Provider>
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
