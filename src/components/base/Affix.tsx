import * as React from 'react'
import classnames from 'classnames'
import * as ReactDOM from 'react-dom'
import WindowEventHandler from './WindowEventHandler'
import getViewPortSize from '../../utils/getViewPortSize'
import { withDefaultProps } from '../../utils/props'
import { throttle } from 'lodash'
import './Affix.scss'

export interface AffixProps {
  placeHoldClassName?: string
  className?: string
  prefix?: string
  zIndex?: number
  offsetTop?: number
  offsetBottom?: number
  onPin?(): void
  onUnpin?(): void
}

interface WrapStyles {
  zIndex?: number
  width?: number
  position: AffixPosition
  bottom?: number
  top?: number
}

type AffixPosition = 'static' | 'fixed'

interface AffixState {
  position: AffixPosition
  width: number
  placeHoldStyle: object
}

class Affix extends React.PureComponent<AffixProps, AffixState> {
  constructor(props: AffixProps) {
    super(props)
    this.state = {
      position: 'static',
      width: null,
      placeHoldStyle: {},
    }
  }
  affix = false

  getStyles(): WrapStyles {
    const { zIndex, offsetBottom, offsetTop } = this.props
    const { position, width } = this.state
    if (position == 'fixed') {
      return {
        position,
        zIndex,
        width,
        bottom: offsetBottom,
        top: offsetTop,
      }
    }
    return {
      position,
    }
  }

  pin() {
    const { onPin } = this.props
    this.affix = true
    this.setWidth()
    this.setState({
      position: 'fixed',
    })
    onPin && onPin()
  }

  unpin() {
    const { onUnpin } = this.props
    this.affix = false
    this.setState({
      position: 'static',
      width: null,
      placeHoldStyle: { overflow: 'hidden' },
    })
    onUnpin && onUnpin()
  }

  setWidth() {
    const element = ReactDOM.findDOMNode(this) as HTMLElement
    this.setState({
      width: element.offsetWidth,
      placeHoldStyle: {
        width: '100%',
        height: element.offsetHeight,
      },
    })
  }

  updatePin() {
    const affix = this.affix
    const props = this.props
    const element = ReactDOM.findDOMNode(this) as HTMLElement
    let readllyNum, propsNum
    if (props.offsetBottom !== undefined) {
      readllyNum = getViewPortSize().height - element.getBoundingClientRect().bottom
      propsNum = props.offsetBottom
    } else {
      readllyNum = element.getBoundingClientRect().top
      propsNum = props.offsetTop
    }
    if (affix && readllyNum > propsNum) {
      this.unpin()
    }
    if (!affix && readllyNum <= propsNum) {
      this.pin()
    }
  }

  handleResize = throttle(() => {
    this.updatePin()
    this.setWidth()
  }, 20)

  handleScroll = throttle(() => {
    this.updatePin()
  }, 20)

  render() {
    const { prefix, className, placeHoldClassName } = this.props
    const wrapClass = classnames(`${prefix}-affix`, className)
    return (
      <div className={placeHoldClassName} style={this.state.placeHoldStyle}>
        <div className={wrapClass} style={{ ...this.getStyles() }}>
          {this.props.children}
        </div>
        <WindowEventHandler eventName="scroll" callback={this.handleScroll} />
        <WindowEventHandler eventName="resize" callback={this.handleResize} />
      </div>
    )
  }
}

export default withDefaultProps(
  {
    offsetTop: 0,
    prefix: 'curly',
    zIndex: 1000,
  },
  Affix
)
