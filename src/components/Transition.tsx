import * as React from 'react'
import { timeout } from '../contants/transition'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './Transition.scss'
export interface TransitionProps {
  location: {
    pathname: string
    key: string
  }
}

class Transition extends React.PureComponent<TransitionProps> {
  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={timeout}>
          {children}
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
