import * as React from 'react'
import { ImageSharp } from '../graphql-types'
import { GatsbyLinkProps, Link } from 'gatsby'
import * as classes from './Header.scss'
import StarCanvas from './StarCanvas'
export interface MenuItem {
  name: string
  path: string
  Link: React.ComponentClass<GatsbyLinkProps<any>>
}

export interface HeaderProps {
  background: ImageSharp
  menuItems: MenuItem[]
  topLeft: string
}

export default (props: HeaderProps) => {
  const { menuItems, topLeft } = props
  return (
    <header className={classes.header}>
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
        <Link to="/">{topLeft}</Link>
      </h1>
      <div className={classes.banner}>
        <div className={classes.headerBgContainer}>
          <StarCanvas height={480} />
        </div>
      </div>
    </header>
  )
}
