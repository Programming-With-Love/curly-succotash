import * as React from 'react'
import { MarkdownHeading } from '../graphql-types'
import { withDefaultProps } from '../utils/props'
import WindowEventHandler from './base/WindowEventHandler'
import classnames from 'classnames'
import './MarkNav.scss'
import { throttle } from 'lodash'
const slugs = require(`github-slugger`)
export interface MarkNavProps {
  headings: MarkdownHeading[]
  ordered: boolean
  className: string
}

interface MarkNavState {
  currentListNo: string
  scrollHeadings: ScrollHeading[]
}

interface ScrollHeading extends MarkdownHeading {
  top: number
  active: boolean
  showValue: string
}

function getElementTop(el: HTMLElement): number {
  let actualTop = el.offsetTop

  let current = el.offsetParent as HTMLElement

  while (current !== null) {
    actualTop += current.offsetTop

    current = current.offsetParent as HTMLElement
  }

  return actualTop
}

const handleMaoClick = (top: number, hash: string) => (e: MouseEvent) => {
  e.preventDefault()
  window.scrollTo({
    top: top + 1,
  })
}

class MarkNav extends React.Component<MarkNavProps, MarkNavState> {
  private handleScroll = throttle(() => {
    this.updateScroll(this.state.scrollHeadings)
  }, 20)

  constructor(props: MarkNavProps) {
    super(props)
    this.state = {
      currentListNo: '',
      scrollHeadings: [],
    }
  }

  render() {
    return (
      <div className="mark-nav">
        {this.mapNav(this.state.scrollHeadings)}
        <WindowEventHandler eventName={'scroll'} callback={this.handleScroll} />
      </div>
    )
  }

  componentDidMount() {
    let scrollHeadings = this.props.headings.map(heading => {
      const key = this.mapHeading(heading.value)
      let h = document.querySelector(`[data-id=${key}]`) as HTMLElement
      if (h) {
        let mao = h.querySelector('a.anchor') as HTMLAnchorElement
        let top = getElementTop(h)
        mao.onclick = handleMaoClick(top, key)
        return {
          ...heading,
          top,
          active: false,
          showValue: key,
        }
      }
      return {
        ...heading,
        top: 0,
        active: false,
        showValue: key,
      }
    })
    this.updateScroll(scrollHeadings)
  }

  private updateScroll(scrollHeadings: ScrollHeading[]) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    let last = 0
    let active = false
    for (let i = 0; i < scrollHeadings.length; i++) {
      scrollHeadings[i].active = false
      if (!active && scrollHeadings[i].top >= scrollTop) {
        scrollHeadings[last].active = true
        active = true
      }
      last = i
    }
    if (!active) {
      scrollHeadings[last].active = true
    }
    this.setState({
      scrollHeadings,
    })
  }
  private mapNav(headings: ScrollHeading[]): Object[] {
    return headings.map((heading, index) => (
      <a
        key={index}
        className={classnames('head-nav-item', `nav-item-${heading.depth}`, { active: heading.active })}
        href={`#${heading.showValue}`}
        onClick={e => handleMaoClick(heading.top, heading.showValue)(e.nativeEvent)}
      >
        {heading.value}
      </a>
    ))
  }
  private mapHeading(heading: string): string {
    return slugs().slug(heading, false)
  }
}

export default withDefaultProps(
  {
    ordered: false,
    className: '',
  },
  MarkNav
)
