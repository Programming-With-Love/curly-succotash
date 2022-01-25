import * as React from 'react'
import * as classes from './CleanPostList.module.scss'
import { Link } from 'gatsby'
export interface CleanPostListProps {
  data: {
    fields: any
    frontmatter: any
  }[]
}

export default (props: CleanPostListProps) => (
  <ul className={classes.list}>
    {props.data.map(({ fields, frontmatter }, index) => (
      <li key={index}>
        <Link to={fields.slug}>
          <time className={classes.time}>{frontmatter.createdDate}</time>
          <p className={classes.title}>{frontmatter.title}</p>
        </Link>
      </li>
    ))}
  </ul>
)
