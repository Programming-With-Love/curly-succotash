import * as React from 'react'
import ConnectedLayout from '../containers/LayoutContainer'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { timeout } from '../contants/transition'
import 'animate.css/source/fading_entrances/fadeInLeft.css'
import 'animate.css/source/fading_exits/fadeOutRight.css'
import './transition.scss'
export default ({ element, props }: any) => {
  return (
    <ConnectedLayout {...props}>
      <TransitionGroup>
        <CSSTransition
          key={props.location.pathname}
          classNames={{
            enter: 'animated',
            enterActive: 'fadeInLeft duration',
            exit: 'hide-exit',
          }}
          timeout={timeout}
          unmountOnExit
        >
          {element}
        </CSSTransition>
      </TransitionGroup>
    </ConnectedLayout>
  )
}
