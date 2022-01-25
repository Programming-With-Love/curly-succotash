import * as React from 'react'
import { IArchive } from '../templates/blog-archives'
import * as classes from './Archives.module.scss'
import CleanPostList from './CleanPostList'
import NoData from './base/NoData'
export interface ArchivesProps {
  archives: IArchive[]
}

export default (props: ArchivesProps) => (
  <div>
    {props.archives == null ? (
      <NoData />
    ) : (
      props.archives.map(({ year, posts }) => {
        return (
          <div key={year}>
            <h2 className={classes.year}>{year}</h2>
            <CleanPostList data={posts} />
          </div>
        )
      })
    )}
  </div>
)
