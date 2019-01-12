import * as React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { StoreState } from '../state'
import { Dispatch, bindActionCreators } from 'redux'
import { showHeader } from '../actions/header'
import { HeaderType } from '../contants/header'
function mapStateToProps(state: StoreState) {
  return {
    headerType: state.headerType,
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
  headerType: HeaderType
  showHeader(headerType: HeaderType): void
}

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>, headerType: HeaderType) => {
  //the type WithLayoutProps skip type P. it's must be (WithLayoutProps & P)
  class WithLayout extends React.Component<WithLayoutProps> {
    componentWillMount() {
      this.props.showHeader(headerType)
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
