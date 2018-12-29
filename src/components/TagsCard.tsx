import * as React from 'react'
import { GatsbyLinkProps } from 'gatsby-link'

import { markdownRemarkGroupConnectionConnection } from '../graphql-types'

import * as classes from './TagsCard.module.scss'

export interface TagsCardProps extends React.HTMLProps<HTMLDivElement> {
  tags: string[]
  Link: React.ComponentClass<GatsbyLinkProps<any>>
  origin?: boolean
}

export default (props: TagsCardProps) => (
  <div className={classes.tagContainer}>
    {props.origin ? (
      <div title={'原创内容'} className={classes.original}>
        原
      </div>
    ) : null}
    {props.tags.map(tag => {
      const tagLink = `/blog/tags/${tag}/`
      return (
        <span key={tag} className={classes.tag}>
          <props.Link to={tagLink}>{tag}</props.Link>
        </span>
      )
    })}
  </div>
)
