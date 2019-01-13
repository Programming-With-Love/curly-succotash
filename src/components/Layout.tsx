import * as React from 'react'
import { Link } from 'gatsby'
import { Query, ImageSharp } from '../graphql-types'
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
import Footer from './Footer'
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
  render() {
    let inner
    let headerExtraProps
    const { headerType } = this.props
    switch (headerType) {
      case HeaderType.NO_HEADER_INNER:
        inner = null
        headerExtraProps = {}
        break
      case HeaderType.POST_HEADER:
        inner = <PostInner {...this.props.innerProps} />
        headerExtraProps = {
          background: this.props.innerProps.image,
        }
        break
      case HeaderType.AUTHOR_HEADER:
      default:
        inner = <AuthorInner />
        headerExtraProps = {}
    }
    return (
      <div className={classes.root}>
        {/* 页头 */}
        <Header menuItems={menuItems} {...headerExtraProps}>
          {inner}
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

        {/* 内容 */}
        {this.props.children}
        {/* 页尾 */}
        <Footer />
      </div>
    )
  }
}
