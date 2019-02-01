import * as React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { StoreState } from '../state'
import { Dispatch, bindActionCreators } from 'redux'
import { showHeader, HeaderAction } from '../actions/header'
import { HeaderType } from '../contants/header'
import { InnerProps } from '../components/inner'

export interface HeaderDisptacherProps {
  showHeader(headerType: HeaderType, data?: InnerProps): HeaderAction
}
function mapStateToProps(state: StoreState) {
  return {
    headerType: state.header.headerType,
    innerProps: state.header.data,
  }
}
export const mapDispatchToProps = (dispatch: Dispatch<HeaderAction>) => {
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
    data?: InnerProps
    showHeader(headerType: HeaderType, data?: InnerProps): HeaderAction
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
