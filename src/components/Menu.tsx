import * as React from 'react'
import { GatsbyLinkProps } from 'gatsby-link'
import * as classes from './Menu.module.scss'
import Media from 'react-media'
export interface MenuItem {
  name: string
  path: string
  Link: React.ComponentType<GatsbyLinkProps<any>>
}

export interface MenuProps {
  items: MenuItem[]
}

export default (props: MenuProps) => (
  <nav className={classes.menu}>
    <Media query="(min-width:721px)">
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <item.Link to={item.path}>{item.name}</item.Link>
          </li>
        ))}
      </ul>
    </Media>
    <Media query="(max-width:720px)">
      <div className={classes.foldMenu}>
          
      </div>
    </Media>
  </nav>
)
