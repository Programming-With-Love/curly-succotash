import * as React from 'react'
import './PostInner.scss'
import Render from './Render'
import TagsCard, { TagsCardProps } from '../TagsCard'

export interface PostInnerProps extends TagsCardProps {
  blogTitle: string
}

export class PostInner extends React.Component<PostInnerProps> {
  render() {
    return (
      <div className="post-inner">
        <div className="tags-header-container">
          <TagsCard {...this.props} />
        </div>
        <h1>{this.props.blogTitle}</h1>
      </div>
    )
  }
}

export default Render(PostInner)
