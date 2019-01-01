import * as React from 'react'
import { Link } from 'gatsby'
import { DataJson, MarkdownRemarkConnection, Site, ImageSharp } from '../graphql-types'
import * as classes from './Layout.module.scss'
import { StaticQuery, graphql } from 'gatsby'
import AuthorInner from './inner/AuthorInner'
import '../global.scss'
import Header from './Header'
export const menuItems = [
  { name: '首页', path: '/', exact: true, icon: 'home', inverted: true, Link },
  { name: '归档', path: '/archive/', exact: true, icon: 'info circle', Link },
  { name: '时间轴', path: '/timeline/', exact: false, icon: 'newspaper', Link },
  { name: '标签', path: '/tags/', exact: false, icon: 'tag', Link },
]

const authorInner = (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          totalCount
        }
        dataJson {
          author {
            name
            avatar {
              children {
                ... on ImageSharp {
                  fixed(width: 80, height: 80) {
                    src
                    srcSet
                  }
                }
              }
            }
          }
          speech
        }
      }
    `}
    render={data => {
      const props = {
        totalCount: data.allMarkdownRemark.totalCount,
        title: 'xxx的个人博客',
        description: 'xxxx',
        speech: data.dataJson.speech,
        author: {
          name: data.dataJson.author.name,
          avatar: data.dataJson.author.avatar,
        },
      }
      return <AuthorInner {...props} />
    }}
  />
)

export interface LayoutProps {
  location: {
    pathname: string
  }
  showMain: boolean
  children: any
}

export default class Layout extends React.Component<Readonly<LayoutProps>> {
  constructor(props: LayoutProps) {
    super(props)
  }
  render() {
    const { showMain } = this.props
    return (
      <div className={classes.root}>
        {/* 页头 */}
        <Header menuItems={menuItems}>
          {showMain ? authorInner : null}
        </Header>

        <main className={classes.content}>{this.props.children}</main>
        <div>{/* 页尾 */}</div>
      </div>
    )
  }
}
