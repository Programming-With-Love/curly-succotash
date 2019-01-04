import * as React from 'react'
import * as ReactDOM from 'react-dom'

export default <T extends object>(WrappedComponent: React.ComponentType<T>) => {
  class Proxy extends React.Component<T> {
    componentDidMount() {
      ReactDOM.render(<WrappedComponent {...this.props} />, document.getElementById('main-header'))
    }
    componentWillUnmount() {
      let container = document.getElementById('main-header')
      ReactDOM.unmountComponentAtNode(container)
    }
    render(): null {
      return null
    }
  }
  return Proxy
}
