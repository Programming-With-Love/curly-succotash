import * as React from 'react'
import ConnectedLayout from '../containers/LayoutContainer'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { timeout } from '../contants/transition'
import 'animate.css/animate.min.css'
import './transition.scss'
import Media from 'react-media'
export default ({ element, props }: any) => {
  return (
    <ConnectedLayout {...props}>
      <Media query="(min-width: 721px)">
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
      </Media>
      <Media query="(max-width: 720px)">{element}</Media>
    </ConnectedLayout>
  )
}
