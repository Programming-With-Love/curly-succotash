import { Link } from 'gatsby'
import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import PageThemeContext, { ThemeContext } from './PageThemeContext'
import { MuiThemeProvider, withStyles, Theme, createStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { StaticQuery, graphql } from 'gatsby'
import { ImageSharp } from '../graphql-types'
import List from '@material-ui/core/List'
export const menuItems = [
  { name: 'Home', path: '/', exact: true, icon: 'home', inverted: true },
  { name: 'Archive', path: '/archive/', exact: true, icon: 'info circle' },
  { name: 'Timeline', path: '/timeline/', exact: false, icon: 'newspaper' },
]

export interface LayoutProps {
  location: {
    pathname: string
  }
  children: any
  classes: any
}

let siderWidth = 200

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    header: {
      width: '100%',
      height: 480,
      marginBottom: 90,
      fontFamily: 'Helvetica Neue,Helvetica,Ubuntu,Arial,sans-serif',
      overflowX: 'hidden',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      zIndex: theme.zIndex.drawer + 1,
    },

    personHeader: {
      position: 'absolute',
      width: 480,
      top: 280,
      color: 'white',
      '& .avatar': {
        width: 80,
        height: 80,
      },
      '& .headerNav': {
        width: siderWidth,
        position: 'absolute',
        top: 200,
        backgroundColor: theme.palette.background.paper,
      },
    },
    content: {
      width: '960',
      position: 'absolute',
      top: '400',
    },
  })

export class ThemeLayout extends React.Component<LayoutProps> {
  constructor(props: LayoutProps) {
    super(props)
  }
  render() {
    const { classes } = this.props
    return (
      <Provider store={store}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

        <StaticQuery
          query={graphql`
            query {
              allMarkdownRemark {
                totalCount
              }
              dataJson {
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
                header {
                  children {
                    ... on ImageSharp {
                      fixed(width: 1920, height: 480) {
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
            const postCount = data.allMarkdownRemark.totalCount
            const { title, description } = data.site.siteMetadata
            const headerImage = data.dataJson.header.children[0] as ImageSharp
            return (
              <div className={classes.root}>
                <CssBaseline />
                {/* 页头 */}
                <header className={classes.header} style={{ backgroundImage: `url(${headerImage.fixed.src})` }}>
                  <div className={classes.personHeader}>
                    <Grid container justify="center" alignItems="center">
                      <Avatar alt={authorName} src={avatar.fixed.src} srcSet={avatar.fixed.srcSet} className="avatar" />
                      <div style={{ textAlign: 'left', marginLeft: 20 }}>
                        <p>{postCount} 篇文章</p>
                        <h2>{title}</h2>
                        <p>{description}</p>
                      </div>
                    </Grid>
                    <List component="nav" className="headerNav" />
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

const Layout = withStyles(styles)(ThemeLayout)
export default Layout

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    constructor(props: P & LayoutProps) {
      super(props)
      this.muiPageContext = PageThemeContext
    }
    muiPageContext: ThemeContext
    render() {
      return (
        <JssProvider generateClassName={this.muiPageContext.generateClassName}>
          <MuiThemeProvider theme={this.muiPageContext.theme} sheetsManager={this.muiPageContext.sheetsManager}>
            <Layout location={this.props.location}>
              <WrappedComponent {...this.props} />
            </Layout>
          </MuiThemeProvider>
        </JssProvider>
      )
    }
  }
