const React = require('react')
const { Provider } = require('react-redux')
const { renderToString } = require('react-dom/server')

const createStore = require('./src/store/createStore')
exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const store = createStore()
  const ConnectedBody = () => <div id="rooooot"><Provider store={store}>{bodyComponent}</Provider></div>
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}