import * as React from 'react'
import { Link } from 'gatsby'
import { ImageSharpFixed } from '../graphql-types'
import * as classes from './PostItem.module.scss'
export interface PostItemProps {
  cover: ImageSharpFixed
  title: string
  updatedDate: Date
  href: string
  excerpt: string
  timeToRead: number
  words: number
}

const PostItem = (props: PostItemProps) => {
  const { cover, title, updatedDate, href, excerpt, timeToRead, words } = props
  return (
    <div className={classes.postItem}>
      <div className={classes.itemMain}>
        <div className={classes.cover}>
          <Link to={href}>
            <img src={cover.src} srcSet={cover.srcSet} width="680" height="440" />
          </Link>
        </div>
        <div className={classes.itemElse}>
          <p>{updatedDate}</p>
          <h3>
            <Link to={href}>{title}</Link>
          </h3>
          <p>{excerpt}</p>
          <p className={classes.here}>
            共{words}字-大约需要阅读{timeToRead}min
          </p>
        </div>
      </div>
    </div>
  )
}
export default PostItem
