import * as React from 'react'
import { Link } from 'gatsby'
import { IArchive } from '../templates/blog-archives'
import * as classes from './Archives.module.scss'
export interface ArchivesProps {
  archives: Array<IArchive>
}

export default (props: ArchivesProps) => (
  <div>
    {props.archives.map(({ year, posts }) => {
      return (
        <div key={year}>
          <h2 className={classes.year}>{year}</h2>
          <ul className={classes.list}>
            {posts.map(({ fields, frontmatter }, index) => (
              <li key={index}>
                <Link to={fields.slug} className={classes.link}>
                  <time className={classes.time}>{frontmatter.createdDate}</time>
                  <p className={classes.title}>{frontmatter.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
    })}
  </div>
)
