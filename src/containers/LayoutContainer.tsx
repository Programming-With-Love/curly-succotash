import * as React from 'react'
import { connect } from 'react-redux'
import Layout, { LayoutProps } from '../components/Layout'
import { StoreState } from '../state'
function mapStateToProps(state: StoreState) {
  return {
    showMain: state.header.showMain,
  }
}
const ConnectedLayout = connect(mapStateToProps)(Layout)

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <ConnectedLayout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </ConnectedLayout>
      )
    }
  }

export default ConnectedLayout
