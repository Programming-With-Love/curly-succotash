import * as React from 'react'
import { GatsbyLinkProps } from 'gatsby-link'

import * as classes from './TagsCard.module.scss'
import classnames from 'classnames'

export interface TagsCardProps extends React.HTMLProps<HTMLDivElement> {
  tags: Array<
    | string
    | {
        name: string
        count: number
      }
  >
  Link: React.ComponentClass<GatsbyLinkProps<any>>
  origin?: boolean
  tagSize?: 'large' | 'small'
}

export default (props: TagsCardProps) => {
  const className = classnames(classes.tag, {
    [classes.large]: props.tagSize === 'large',
    [classes.small]: props.tagSize === 'small' || props.tagSize == null,
  })
  return (
    <div className={classes.tagContainer}>
      {props.origin ? (
        <div title={'原创内容'} className={classes.original}>
          原
        </div>
      ) : null}
      {props.tags &&
        props.tags.map(tag => {
          if (typeof tag === 'string') {
            const tagLink = `/blog/tag/${tag}/`
            return (
              <span key={tag} className={className}>
                <props.Link to={tagLink}>{tag}</props.Link>
              </span>
            )
          } else {
            const tagLink = `/blog/tag/${tag.name}/`
            return (
              <span key={tag.name} className={className}>
                <props.Link to={tagLink}>
                  {tag.name}({tag.count})
                </props.Link>
              </span>
            )
          }
        })}
    </div>
  )
}
