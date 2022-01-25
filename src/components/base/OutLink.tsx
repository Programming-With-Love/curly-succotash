import * as React from 'react'
import { GatsbyLinkProps } from 'gatsby'
export default (props: GatsbyLinkProps<any>) => (
  <a href={props.to} target="_blank">
    {props.children}
  </a>
)
