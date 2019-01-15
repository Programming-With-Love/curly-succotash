import * as React from 'react'
import ConnectedLayout from '../containers/LayoutContainer'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { timeout } from '../contants/transition'
import 'animate.css/source/fading_entrances/fadeInLeft.css'
import 'animate.css/source/fading_exits/fadeOutRight.css'
import './transition.scss'
import Media from 'react-media'
export default ({ element, props }: any) => {
  return (
    <ConnectedLayout {...props}>
      <TransitionGroup>
        <CSSTransition
          key={props.location.pathname}
          classNames={{
            enter: 'animated',
            enterActive: 'fadeInLeft duration',
            exit: 'animated',
            exitActive: 'fadeOutRight duration',
          }}
          timeout={timeout}
        >
          {element}
        </CSSTransition>
      </TransitionGroup>
    </ConnectedLayout>
  )
}
