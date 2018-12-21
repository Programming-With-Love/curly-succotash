import { Link } from 'gatsby'
import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import PageThemeContext, { ThemeContext } from './PageThemeContext'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
export const menuItems = [
  { name: 'Home', path: '/', exact: true, icon: 'home', inverted: true },
  { name: 'About', path: '/about/', exact: true, icon: 'info circle' },
  { name: 'Blog', path: '/blog/', exact: false, icon: 'newspaper' },
]

export interface LayoutProps {
  location: {
    pathname: string
  }
  children: any
  classes: any
}

const styles = {
  layout: {
    fontSize: 26,
  },
}

export class NoThemeLayout extends React.Component<LayoutProps> {
  constructor(props: LayoutProps) {
    super(props)
    this.muiPageContext = PageThemeContext
  }
  muiPageContext: ThemeContext
  render() {
    const { classes } = this.props
    return (
      <Provider store={store}>
        <JssProvider generateClassName={this.muiPageContext.generateClassName}>
          <MuiThemeProvider theme={this.muiPageContext.theme} sheetsManager={this.muiPageContext.sheetsManager}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <div className={classes.layout}>hello world!</div>
            <div>{/* 页头 */}</div>
            {this.props.children}
            <div>{/* 页尾 */}</div>
          </MuiThemeProvider>
        </JssProvider>
      </Provider>
    )
  }
}

const Layout = withStyles(styles)(NoThemeLayout)
export default Layout

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
