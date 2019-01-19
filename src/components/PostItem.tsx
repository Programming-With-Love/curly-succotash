import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { ImageSharpFixed, Query, ImageSharp } from '../graphql-types'
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

export default (props: PostItemProps) => {
  const { cover, title, updatedDate, href, excerpt, timeToRead, words, origin } = props
  return (
    <div className={classes.postItem}>
      <div className={classes.timeLabel}>
        <p>{updatedDate}</p>
      </div>
      <div className={classes.itemMain}>
        <div className={classes.cover}>
          <Link to={href}>
            <StaticQuery
              query={graphql`
                {
                  allFile(filter: { absolutePath: { regex: "/headers/" } }) {
                    totalCount
                    edges {
                      node {
                        children {
                          ... on ImageSharp {
                            fixed(width: 680, height: 440) {
                              src
                              srcSet
                            }
                          }
                        }
                      }
                    }
                  }
                }
              `}
              render={(data: Query) => {
                if (cover.src) {
                  return <img {...cover} />
                } else {
                  const covers = data.allFile.edges.map(edge => edge.node.children[0] as ImageSharp)
                  const index = Math.floor(Math.random() * covers.length)
                  let props = covers[index].fixed
                  return <img {...props} />
                }
              }}
            />
          </Link>
        </div>
        <div className={classes.itemElse}>
          <TagsCard Link={Link} tags={props.tags} origin={origin} />
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
