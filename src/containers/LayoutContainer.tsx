import * as React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { StoreState } from '../state'
import { Dispatch, bindActionCreators } from 'redux'
import { showHeader, HeaderAction } from '../actions/header'
function mapStateToProps(state: StoreState) {
  return {
    showMain: state.header.showMain,
  }
}
function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      showHeader,
    },
    dispatch
  )
}
const ConnectedLayout = connect(mapStateToProps)(Layout)

export interface WithLayoutProps {
  showMain: boolean
  showHeader: (showMain: boolean) => HeaderAction
}

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  showAuthorInner: boolean = false
) => {
  //the type WithLayoutProps skip type P. it's must be (WithLayoutProps & P)
  class WithLayout extends React.Component<WithLayoutProps> {
    componentWillMount() {
      if (this.props.showMain != showAuthorInner) {
        this.props.showHeader(showAuthorInner)
      }
    }
    render() {
      return <WrappedComponent {...this.props as P & WithLayoutProps} />
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithLayout)
}

export default ConnectedLayout
