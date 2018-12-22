import { Link } from 'gatsby'
import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import PageThemeContext, { ThemeContext } from './PageThemeContext'
import { MuiThemeProvider, withStyles, WithStyles, Theme, createStyles } from '@material-ui/core/styles'
export const menuItems = [
  { name: 'Home', path: '/', exact: true, icon: 'home', inverted: true },
  { name: 'About', path: '/about/', exact: true, icon: 'info circle' },
  { name: 'Timeline', path: '/timeline/', exact: false, icon: 'newspaper' },
]

export interface LayoutProps {
  location: {
    pathname: string
  }
  children: any
  classes: ExtraClasses
}

interface ExtraClasses {
  header: any
  headerBg: any
  heaederNav: any
  headerLeft: any
}

const styles = (theme: Theme) =>{
  console.log(theme)
  return createStyles({
    header: {
      position: 'relative',
      width: '100%',
      height: 480,
      marginBottom: 90,
      fontFamily: 'Helvetica Neue,Helvetica,Ubuntu,Arial,sans-serif',
      color: '#fff',
      overflowX: 'hidden',
    },
    headerBg: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'black',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      animation: 'fadein 1s ease-in-out',
    },
  })
}

export class ThemeLayout extends React.Component<LayoutProps> {
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
            <div>
              {/* 页头 */}
              <header className={classes.header}>
                <div className={classes.headerBg} />
                <nav className={classes.heaederNav} />
                <div className={classes.headerLeft} />
              </header>
            </div>
            {this.props.children}
            <div>{/* 页尾 */}</div>
          </MuiThemeProvider>
        </JssProvider>
      </Provider>
    )
  }
}

const Layout = withStyles(styles)(ThemeLayout)
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
