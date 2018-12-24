import * as React from 'react'
import { createStyles, Theme, withStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import { ImageSharpFixed } from '../graphql-types'
export interface PostItemProps {
  cover: ImageSharpFixed
  title: string
  updatedDate: Date
  href: string
  excerpt: string
  timeToRead: number
  classes: PostItemStyles
  words: number
}

export interface PostItemStyles {
  postItem: string
  itemMain: string
  cover: string
  itemElse: string
  here: string
}

const styles = () =>
  createStyles({
    postItem: {
      margin: '0 auto 100px',
      width: 1200,
      '& a': {
        textDecoration: 'none',
        color: '#333',
      },
      '&:nth-child(odd)': {
        textAlign: 'left',
      },
      '&:nth-child(even)': {
        textAlign: 'right',
      },
      '&:nth-child(odd) $itemElse': {
        left: 660,
      },
      '&:nth-child(even) $itemElse': {
        right: 660,
      },
    },
    itemMain: {
      display: 'block',
      position: 'relative',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    cover: {
      display: 'inline-block',
      width: 680,
      height: 440,
      overflow: 'hidden',
      maxWidth: '100%',
      position: 'relative',
      zIndex: 3,
    },
    itemElse: {
      textDecoration: 'none',
      position: 'absolute',
      background: '#fff',
      top: 20,
      height: 398,
      width: 498,
      margin: 0,
      textAlign: 'left',
      padding: '60px 80px 20px',
      border: '1px solid #eaeaea',
      '& p.first-child': {
        color: '#999',
        fontSize: 12,
        margin: '80px 0 0 80px',
      },
    },
    here: {
      position: 'absolute',
      left: 80,
      bottom: 80,
      color: '#999',
      fontSize: 12,
    },
  })

const PostItem = (props: PostItemProps) => {
  const { classes, cover, title, updatedDate, href, excerpt, timeToRead, words } = props
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
export default withStyles(styles)(PostItem)
