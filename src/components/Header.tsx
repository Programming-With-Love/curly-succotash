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
  Link: React.ComponentClass<GatsbyLinkProps<any>>
}

export interface HeaderProps extends React.HTMLProps<HTMLHeadingElement> {
  background?: string | ImageSharp | null
  menuItems: MenuItem[]
  children: any
}

interface HeadState {
  starHeight: number
}
function getClientHeight() {
  var clientHeight = 0
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    var clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight
  } else {
    var clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight
  }
  return clientHeight
}
export default class Header extends React.Component<HeaderProps, HeadState> {
  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      starHeight: 480,
    }
  }
  componentDidMount() {}
  private adaptHeight = () => {
    const height = getClientHeight()
    console.log(height)
    this.setState({
      starHeight: getClientHeight(),
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
      <header className={classes.header} {...tProps}>
        {/* <WindowEventHandler eventName="resize" callback={this.adaptHeight} /> */}
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
            <StarCanvas height={480} />
          </div>
          <div id="main-header" />
          {children}
        </div>
      </header>
    )
  }
}
