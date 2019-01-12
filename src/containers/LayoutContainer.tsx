import * as React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { StoreState } from '../state'
import { Dispatch, bindActionCreators } from 'redux'
import { showHeader, HeaderAction } from '../actions/header'
import { HeaderType } from '../contants/header'
import { PostInnerProps } from '../components/inner/PostInner'
import { InnerProps } from '../components/inner'
function mapStateToProps(state: StoreState) {
  return {
    headerType: state.header.headerType,
    innerProps: state.header.data,
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

export interface WithLayoutProps {}

export const WithLayout = connect(
  null,
  mapDispatchToProps
)(
  class WithLayout extends React.Component<{
    headerType: HeaderType
    data?: PostInnerProps
    showHeader(headerType: HeaderType, data?: PostInnerProps): HeaderAction
  }> {
    componentWillMount() {
      this.props.showHeader(this.props.headerType, this.props.data)
    }
    render() {
      return this.props.children
    }
  }
)

export default ConnectedLayout
