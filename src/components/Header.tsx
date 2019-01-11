import * as React from 'react'
import { ImageSharp } from '../graphql-types'
import { GatsbyLinkProps, Link } from 'gatsby'
import * as classes from './Header.module.scss'
import StarCanvas from './StarCanvas'
import { HOME_TITLE } from '../contants/layout'
import WindowEventHandler from '../components/base/WindowEventHandler'
export interface MenuItem {
  name: string
  path: string
  Link: React.ComponentType<GatsbyLinkProps<any>>
}

export interface HeaderProps extends React.HTMLProps<HTMLHeadingElement> {
  background?: string | ImageSharp | null
  menuItems: MenuItem[]
  children: any
}

interface HeadState {
  starHeight: number
  starWidth: number
  rejectClient: {
    x: number
    y: number
  }
}
export default class Header extends React.Component<HeaderProps, HeadState> {
  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      starHeight: 480,
      starWidth: 0,
      rejectClient: null,
    }
  }

  handleResize = () => {
    let winWidth = 0
    if (window.innerWidth) winWidth = window.innerWidth
    else if (document.body && document.body.clientWidth) winWidth = document.body.clientWidth

    this.setState({
      starWidth: winWidth,
    })
  }
  handleReject = (e: any) => {
    this.setState({
      rejectClient: {
        x: e.clientX,
        y: e.clientY,
      },
    })
  }
  render() {
    const props = this.props
    const { menuItems, children } = props
    const tProps = { ...props }
    delete tProps.className
    delete tProps.background
    delete tProps.menuItems
    delete tProps.children
    return (
      <header
        className={classes.header}
        {...tProps}
        onMouseMove={this.handleReject}
        onMouseLeave={() => {
          this.setState({
            rejectClient: null,
          })
        }}
      >
        <WindowEventHandler eventName="resize" callback={this.handleResize} />

        <nav className={classes.headerNav}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <item.Link to={item.path}>{item.name}</item.Link>
              </li>
            ))}
          </ul>
        </nav>

        <h1 className={classes.headerTitle}>
          <Link to="/">{HOME_TITLE}</Link>
        </h1>
        <div className={classes.banner}>
          <div className={classes.headerBgContainer}>
            <StarCanvas
              height={this.state.starHeight}
              width={this.state.starWidth}
              rejectClient={this.state.rejectClient}
            />
          </div>
          <div id="main-header" />
          {children}
        </div>
      </header>
    )
  }
}
