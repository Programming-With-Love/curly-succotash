import * as React from 'react'
import { ImageSharp } from '../graphql-types'
import { GatsbyLinkProps, Link } from 'gatsby'
import * as classes from './Header.module.scss'
import StarCanvas from './StarCanvas'
import { HOME_TITLE } from '../contants/layout'
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

export default (props: HeaderProps) => {
  const { menuItems, children } = props
  const tProps = { ...props }
  delete tProps.className
  delete tProps.background
  delete tProps.menuItems
  delete tProps.children
  return (
    <header className={classes.header} {...tProps}>
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
