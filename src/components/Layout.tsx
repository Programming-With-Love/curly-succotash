import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { StaticQuery, graphql, Link } from 'gatsby'
import { ImageSharp } from '../graphql-types'
import StarCanvas from './StarCanvas'
import * as classes from './Layout.module.scss'
import '../global.scss'
import Bio from './Bio'
export const menuItems = [
  { name: '首页', path: '/', exact: true, icon: 'home', inverted: true },
  { name: '归档', path: '/archive/', exact: true, icon: 'info circle' },
  { name: '时间轴', path: '/timeline/', exact: false, icon: 'newspaper' },
  { name: '标签', path: '/tags/', exact: false, icon: 'tag' },
]

export interface LayoutProps {
  location: {
    pathname: string
  }
  children: any
}

export default class Layout extends React.Component<LayoutProps> {
  constructor(props: LayoutProps) {
    super(props)
  }
  render() {
    const { pathname } = this.props.location
    return (
      <Provider store={store}>
        <StaticQuery
          query={graphql`
            query {
              allMarkdownRemark {
                totalCount
              }
              dataJson {
                title
                name
                avatar {
                  children {
                    ... on ImageSharp {
                      fixed(width: 180, height: 180) {
                        src
                        srcSet
                      }
                    }
                  }
                }
                bio
              }
              site {
                siteMetadata {
                  title
                  description
                }
              }
            }
          `}
          render={data => {
            const avatar = data.dataJson.avatar.children[0] as ImageSharp
            const authorName = data.dataJson.name as string
            const siteTitle = data.dataJson.title as string
            const bio = data.dataJson.bio as string[]
            const postCount = data.allMarkdownRemark.totalCount
            const { title, description } = data.site.siteMetadata
            return (
              <div className={classes.root}>
                {/* 页头 */}
                <header className={classes.header}>
                  <nav className={classes.headerNav}>
                    <ul>
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          <Link to={item.path}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <h1 className={classes.headerTitle}>
                    <Link to="/">{siteTitle}</Link>
                  </h1>
                  <div className={classes.banner}>
                    <div className={classes.headerBgContainer}>
                      <StarCanvas height={480} />
                    </div>
                    {pathname.startsWith('/blog/') ? null : (
                      <div className={classes.personHeader}>
                        <div className={classes.personInner}>
                          <img
                            alt={authorName}
                            src={avatar.fixed.src}
                            srcSet={avatar.fixed.srcSet}
                            className={classes.avatar}
                          />
                          <div style={{ textAlign: 'left', marginLeft: 20 }}>
                            <p>{postCount} 篇文章</p>
                            <h1>{title}</h1>
                            <p>{description}</p>
                          </div>
                        </div>
                        <div className={classes.innterBio}>
                          <Bio text={bio} />
                        </div>
                      </div>
                    )}
                  </div>
                </header>

                <main className={classes.content}>{this.props.children}</main>
                <div>{/* 页尾 */}</div>
              </div>
            )
          }}
        />
      </Provider>
    )
  }
}

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      )
    }
  }
