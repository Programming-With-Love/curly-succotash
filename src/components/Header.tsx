import * as React from 'react'
import { ImageSharp, Query } from '../graphql-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import * as classes from './Header.module.scss'
import StarCanvas from './StarCanvas'
import { HOME_TITLE } from '../contants/layout'
import WindowEventHandler from '../components/base/WindowEventHandler'
import Menu, { MenuItem } from './Menu'
import OutLink from './base/OutLink'
import { connect } from 'react-redux'
import { StoreState } from '../state'

export const menuItems = [
  { name: '首页', path: '/', Link },
  { name: '归档', path: '/archives/', Link },
  { name: '标签', path: '/tags/', Link },
]

export interface HeaderProps extends React.HTMLProps<HTMLHeadingElement> {
  background?: string | ImageSharp | null
  children: any
  boom: 0 | 1
}

interface HeadState {
  starHeight: number
  starWidth: number
  rejectClient: {
    x: number
    y: number
  }
}
export class Header extends React.Component<HeaderProps, HeadState> {
  state: HeadState = {
    starHeight: 480,
    starWidth: 0,
    rejectClient: null,
  }

  handleReject = (e: any) => {
    this.setState({
      rejectClient: {
        x: e.clientX,
        y: e.clientY,
      },
    })
  }

  handleResize = () => {
    let winWidth = 0
    if (window.innerWidth) {
      winWidth = window.innerWidth
    } else if (document.body && document.body.clientWidth) {
      winWidth = document.body.clientWidth
    }

    this.setState({
      starWidth: winWidth,
    })
  }

  render() {
    const props = this.props
    const { children } = props
    let style
    if (props.background == null) {
      style = {}
    } else if (typeof props.background === 'string') {
      style = {
        backgroundImage: `url(${props.background})`,
      }
    } else {
      style = {
        backgroundImage: `url(${props.background.fixed.src})`,
      }
    }
    return (
      <header
        className={classes.header}
        onMouseMove={this.handleReject}
        onMouseLeave={() => {
          this.setState({
            rejectClient: null,
          })
        }}
      >
        <WindowEventHandler eventName="resize" callback={this.handleResize} />
        <StaticQuery
          query={graphql`
            {
              dataJson {
                menu {
                  path
                  name
                }
              }
            }
          `}
          render={(data: Query) => {
            const extraItems = data.dataJson.menu
            const items = [
              ...menuItems,
              ...extraItems.map(item => ({
                ...item,
                Link: item.path.startsWith('/') ? Link : OutLink,
              })),
              {
                Link: OutLink,
                name: 'rss',
                path: '/rss.xml',
              },
            ]
            if (this.props.boom) {
              items.splice(0, 0, {
                Link,
                name: '草稿箱',
                path: '/drafts',
              })
            }
            return <Menu items={items} />
          }}
        />

        <h1 className={classes.headerTitle}>
          <Link to="/">{HOME_TITLE}</Link>
        </h1>
        <div className={classes.banner}>
          <StarCanvas
            height={this.state.starHeight}
            width={this.state.starWidth}
            rejectClient={this.state.rejectClient}
          />
          <div className={classes.headerBgContainer} style={style} />
          <div id="main-header" />
          {children}
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state: StoreState) => ({
  boom: state.boom,
})

export default connect(mapStateToProps)(Header)
