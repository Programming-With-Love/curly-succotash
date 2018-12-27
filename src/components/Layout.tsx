import * as React from 'react'
import { Link } from 'gatsby'
import { DataJson, MarkdownRemarkConnection, Site, ImageSharp } from '../graphql-types'
import * as classes from './Layout.module.scss'
import '../global.scss'
import Bio from './Bio'
import Header from './Header'
export const menuItems = [
  { name: '首页', path: '/', exact: true, icon: 'home', inverted: true, Link },
  { name: '归档', path: '/archive/', exact: true, icon: 'info circle', Link },
  { name: '时间轴', path: '/timeline/', exact: false, icon: 'newspaper', Link },
  { name: '标签', path: '/tags/', exact: false, icon: 'tag', Link },
]

export interface LayoutProps {
  location: {
    pathname: string
  }
  showMain: boolean
  children: any
  data: {
    dataJson: DataJson
    posts: MarkdownRemarkConnection
    site: Site
  }
  inner: any
}

export default class Layout extends React.Component<Readonly<LayoutProps>> {
  constructor(props: LayoutProps) {
    super(props)
  }
  render() {
    const { data, inner } = this.props
    const avatar = data.dataJson.avatar.children[0] as ImageSharp
    const { name, homeTitle, bio } = data.dataJson
    const { totalCount } = data.posts
    const { title, description } = data.site.siteMetadata
    return (
      <div className={classes.root}>
        {/* 页头 */}
        <Header menuItems={menuItems} topLeft={homeTitle}>
          {inner}
        </Header>

        <main className={classes.content}>{this.props.children}</main>
        <div>{/* 页尾 */}</div>
      </div>
    )
  }
}
