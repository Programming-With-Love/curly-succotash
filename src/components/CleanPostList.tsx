import * as React from 'react'
import { MarkdownRemark, frontmatter_3, fields_3 } from '../graphql-types'
import * as classes from './CleanPostList.module.scss'
import { Link } from 'gatsby'
export interface CleanPostListProps {
  data: {
    fields: fields_3
    frontmatter: frontmatter_3
  }[]
}

export default (props: CleanPostListProps) => (
  <ul className={classes.list}>
    {props.data.map(({ fields, frontmatter }, index) => (
      <li key={index}>
        <Link to={fields.slug} className={classes.link}>
          <time className={classes.time}>{frontmatter.createdDate}</time>
          <p className={classes.title}>{frontmatter.title}</p>
        </Link>
      </li>
    ))}
  </ul>
)
