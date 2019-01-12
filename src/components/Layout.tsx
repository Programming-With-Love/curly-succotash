import * as React from 'react'
import { Link } from 'gatsby'
import { Query } from '../graphql-types'
import * as classes from './Layout.module.scss'
import { StaticQuery, graphql } from 'gatsby'
import OutLink from './base/OutLink'
import AuthorInner from './inner/AuthorInner'
import '../global.scss'
import Header from './Header'
import { Helmet } from 'react-helmet'
import { HeaderType } from '../contants/header'
import PostInner, { PostInnerProps } from './inner/PostInner'
import { InnerProps } from './inner'
export const menuItems = [
  { name: '首页', path: '/', Link },
  { name: '归档', path: '/archives/', Link },
  { name: '标签', path: '/tags/', Link },
  { name: '关于我', path: '/about', Link },
  { name: '简历', path: 'http://resume.zido.site', Link: OutLink },
]

export interface LayoutProps {
  location: {
    pathname: string
  }
  children: any
  headerType: HeaderType
  innerProps: InnerProps
}

export default class Layout extends React.Component<Readonly<LayoutProps>> {
  constructor(props: LayoutProps) {
    super(props)
  }
  private getHeaderInner() {
    const { headerType } = this.props
    switch (headerType) {
      case HeaderType.NO_HEADER_INNER:
        return null
      case HeaderType.POST_HEADER:
        return <PostInner {...this.props.innerProps} />
      case HeaderType.AUTHOR_HEADER:
      default:
        return <AuthorInner />
    }
  }
  render() {
    return (
      <div className={classes.root}>
        <Header menuItems={menuItems}>
          {this.getHeaderInner()}
          <StaticQuery
            query={graphql`
              {
                site {
                  siteMetadata {
                    description
                  }
                }
              }
            `}
            render={(data: Query) => {
              return (
                <Helmet>
                  <meta name="description" content={data.site.siteMetadata.description} />
                </Helmet>
              )
            }}
          />
        </Header>
        {/* 页头 */}

        <main className={classes.content}>{this.props.children}</main>
        <div>{/* 页尾 */}</div>
      </div>
    )
  }
}
