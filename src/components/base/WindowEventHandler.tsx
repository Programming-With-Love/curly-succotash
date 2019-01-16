import * as React from 'react'
import { withDefaultProps } from '../../utils/props'
export interface WindowEventProps<K extends keyof WindowEventMap> {
  eventName: K
  options: boolean | AddEventListenerOptions
  callback(this: Window, ev: WindowEventMap[K]): any
}

class WindowEventHandler<K extends keyof WindowEventMap> extends React.PureComponent<WindowEventProps<K>> {
  componentDidMount() {
    const { eventName, callback, options } = this.props
    window.addEventListener(eventName, callback, options)
  }
  componentWillUnmount() {
    const { eventName, callback, options } = this.props
    window.removeEventListener(eventName, callback, options)
  }
  render(): null {
    return null
  }
}

export default withDefaultProps({ options: false }, WindowEventHandler)
