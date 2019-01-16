import * as React from 'react'
import { GatsbyLinkProps } from 'gatsby-link'
import * as classes from './Menu.module.scss'
import classnames from 'classnames'
import Media from 'react-media'
import { CSSTransition } from 'react-transition-group'
import 'animate.css/source/sliding_entrances/slideInRight.css'
import 'animate.css/source/sliding_exits/slideOutRight.css'
import { timeout } from '../contants/transition'
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
        className={classes.menuBtnContainer}
        onClick={() => {
          const active = !this.props.active
          this.props.onClick(active)
        }}
      >
        <div
          className={classnames(classes.menuBtn, {
            [classes.menuBtnActive]: this.props.active,
          })}
        >
          <div />
        </div>
      </div>
    )
  }
}

export default class Menu extends React.Component<MenuProps, { active: boolean; animation: boolean }> {
  state: {
    active: boolean
    animation: boolean
  } = {
    active: false,
    animation: false,
  }
  bodyClassName: string
  htmlClassName: string
  private handleClick = (active: boolean) => {
    if (this.bodyClassName == null) {
      this.bodyClassName = document.body.className
    }
    if (this.htmlClassName == null) {
      this.htmlClassName = document.documentElement.className
    }
    document.body.className = classnames(this.bodyClassName, {
      [classes.menuOpen]: active,
    })
    document.documentElement.className = classnames(this.htmlClassName, {
      [classes.menuOpen]: active,
    })
    this.setState({
      active,
      animation: true,
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
          <div className={classes.fixPosition}>
            <MenuButton active={this.state.active} onClick={this.handleClick} />
          </div>
        </Media>
        <CSSTransition
          classNames={{
            enter: 'animated',
            enterActive: 'slideInRight duration',
            exit: 'animated',
            exitActive: 'slideOutRight duration',
          }}
          in={this.state.active}
          timeout={timeout}
          // unmountOnExit
          onEntered={() => {
            this.setState({
              animation: false,
            })
          }}
          onExited={() => {
            this.setState({
              animation: false,
            })
          }}
        >
          {() => (
            <div
              className={classnames(classes.menuInner, {
                [classes.show]: this.state.active || this.state.animation,
              })}
            >
              <ul>
                {this.props.items.map((item, index) => (
                  <li key={index}>
                    <item.Link
                      to={item.path}
                      onClick={() => {
                        this.handleClick(false)
                      }}
                    >
                      {item.name}
                    </item.Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CSSTransition>
      </nav>
    )
  }
}
