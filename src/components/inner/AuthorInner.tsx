import * as React from 'react'
import { ImageSharp, Author } from '../../graphql-types'
import Bio from '../Bio'
import './AuthorInner.scss'
export interface AuthorProps {
  totalCount: number
  title: string
  description: string
  author: Author
  speech: string[]
}

export default (props: AuthorProps) => {
  const avatar = props.author.avatar.children[0] as ImageSharp
  const { speech, totalCount, title, description } = props
  const { name } = props.author
  return (
    <div className="person-header">
      <div className="author-inner">
        <img alt={name} src={avatar.fixed.src} srcSet={avatar.fixed.srcSet} className="avatar" />
        <div style={{ textAlign: 'left', marginLeft: 20 }}>
          <p>{totalCount} 篇文章</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className={'inner-bio'}>
        <Bio text={speech} />
      </div>
    </div>
  )
}
