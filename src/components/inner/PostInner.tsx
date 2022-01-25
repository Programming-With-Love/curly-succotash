import * as React from 'react'
import './PostInner.scss'
import TagsCard from '../TagsCard'
import { Link } from 'gatsby'
export interface PostInnerProps {
  tags?: string[]
  origin?: boolean
  title: string
}
export default (props: PostInnerProps) => (
  <div className="post-inner">
    <div className="tags-header-container">
      <TagsCard tags={props.tags} Link={Link} origin={props.origin} />
    </div>
    <h1>{props.title}</h1>
  </div>
)
