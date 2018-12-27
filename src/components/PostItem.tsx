import * as React from 'react'
import { Link } from 'gatsby'
import { ImageSharpFixed } from '../graphql-types'
import * as classes from './PostItem.module.scss'
import TagsCard, { TagsCardProps } from './TagsCard'
export interface PostItemProps extends TagsCardProps {
  cover: ImageSharpFixed
  title: string
  updatedDate: Date
  href: string
  excerpt: string
  timeToRead: number
  words: number
  origin: boolean
}

const PostItem = (props: PostItemProps) => {
  const { cover, title, updatedDate, href, excerpt, timeToRead, words, origin } = props
  return (
    <div className={classes.postItem}>
      <div className={classes.timeLabel}>
        <p>{updatedDate}</p>
      </div>
      <div className={classes.itemMain}>
        <div className={classes.cover}>
          <Link to={href}>
            <img src={cover.src} srcSet={cover.srcSet} width="680" height="440" />
          </Link>
        </div>
        <div className={classes.itemElse}>
          {origin ? <div className={classes.original}>原</div> : null}
          <TagsCard Link={Link} tags={props.tags} />
          <h3>
            <Link to={href}>{title}</Link>
          </h3>
          <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          <p className={classes.here}>
            共{words}字-大约需要阅读{timeToRead}min
          </p>
        </div>
      </div>
    </div>
  )
}
export default PostItem
