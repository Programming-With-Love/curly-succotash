import * as React from 'react'
import './PostInner.scss'

import TagsCard, { TagsCardProps } from '../TagsCard'

export interface PostInnerProps extends TagsCardProps {
  blogTitle: string
}

export default (props: PostInnerProps) => (
  <div className="post-inner">
    <TagsCard {...props} />
    <h1>{props.title}</h1>
  </div>
)
