import * as React from 'react'
import { createStyles, Theme, withStyles } from '@material-ui/core/styles'
export interface PostItemProps {
  cover: string
  title: string
  updateDate: Date
  href: string
  excerpt: string
  timeToRead: number
  classes: PostItemStyles
  left: boolean | null
}

export interface PostItemStyles {
  postItem: string
  itemMain: string
}

const styles = () =>
  createStyles({
    postItem: {
      width: '100%',
      margin: '10px 30px',
    },
  })

const PostItem = (props: PostItemProps) => {
  console.log(props)
  const { classes, cover, title, updateDate, href, excerpt, timeToRead, left } = props
  return (
    <div className={classes.postItem}>
      <div className={classes.itemMain}>
        <h3>{title}</h3>
      </div>
    </div>
  )
}
export default withStyles(styles)(PostItem)
