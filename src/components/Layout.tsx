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
export const menuItems = [
  { name: '首页', path: '/', Link },
  { name: '归档', path: '/archive/', Link },
  { name: '标签', path: '/tags/', Link },
  { name: '关于我', path: 'http://resume.zido.site', Link: OutLink },
]

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
        <StaticQuery
          query={graphql`
            {
              site {
                siteMetadata {
                  title
                  description
                }
              }
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
          render={(data: Query) => {
            const props = {
              totalCount: data.allMarkdownRemark.totalCount,
              title: data.site.siteMetadata.title,
              description: data.site.siteMetadata.description,
              speech: data.dataJson.speech,
              author: {
                name: data.dataJson.author.name,
                avatar: data.dataJson.author.avatar,
              },
            }
            return (
              <Header menuItems={menuItems}>
                <Helmet>
                  <meta name="description" content={props.description} />
                </Helmet>
                {showMain ? <AuthorInner {...props} /> : null}
              </Header>
            )
          }}
        />
        {/* 页头 */}

        <main className={classes.content}>{this.props.children}</main>
        <div>{/* 页尾 */}</div>
      </div>
    )
  }
}
