import * as React from 'react'
import { GatsbyLinkProps } from 'gatsby-link'
import * as classes from './Menu.module.scss'
import classnames from 'classnames'
import Media from 'react-media'
export interface MenuItem {
  name: string
  path: string
  Link: React.ComponentType<GatsbyLinkProps<any>>
}

export interface MenuProps {
  items: MenuItem[]
}

export interface MenuButtonProps {
  active: boolean
  onClick: (active: boolean) => void
}

export class MenuButton extends React.Component<MenuButtonProps> {
  constructor(props: MenuButtonProps) {
    super(props)
  }
  render() {
    return (
      <div
        className={classnames(classes.menuBtn, {
          [classes.menuBtnActive]: this.props.active,
        })}
        onClick={() => {
          const active = !this.props.active
          this.props.onClick(active)
        }}
      >
        <div />
      </div>
    )
  }
}

export default class Menu extends React.Component<MenuProps, { active: boolean }> {
  state: {
    active: boolean
  } = {
    active: false,
  }
  private handleClick = (active: boolean) => {
    this.setState({
      active,
    })
  }
  render() {
    return (
      <nav className={classes.menu}>
        <Media query="(min-width:721px)">
          <ul>
            {this.props.items.map((item, index) => (
              <li key={index}>
                <item.Link to={item.path}>{item.name}</item.Link>
              </li>
            ))}
          </ul>
        </Media>
        <Media query="(max-width:720px)">
          <MenuButton active={this.state.active} onClick={this.handleClick} />
        </Media>
      </nav>
    )
  }
}
