import { Helmet, HelmetProps } from 'react-helmet'
import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default class Position extends React.Component<HelmetProps> {
  render() {
    const dProps = { ...this.props }
    delete dProps.title
    return (
      <StaticQuery
        query={graphql`
          query PositionQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data: any) => (
          <Helmet
            title={
              this.props.title ? `${this.props.title} - ${data.site.siteMetadata.title}` : data.site.siteMetadata.title
            }
            {...dProps}
          />
        )}
      />
    )
  }
}
