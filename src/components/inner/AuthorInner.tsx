import * as React from 'react'
import { ImageSharp, Query } from '../../graphql-types'
import Bio from '../Bio'
import './AuthorInner.scss'
import { StaticQuery, graphql } from 'gatsby'

export default () => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
            }
          }
          allMarkdownRemark {
            totalCount
          }
          dataJson {
            author {
              name
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(width: 80, height: 80) {
                      src
                      srcSet
                    }
                  }
                }
              }
            }
            speech
          }
        }
      `}
      render={(data: Query) => {
        const avatar = data.dataJson.author.avatar.children[0] as ImageSharp
        const totalCount = data.allMarkdownRemark.totalCount
        const { name } = data.dataJson.author
        return (
          <div className="person-header">
            <div className="author-inner">
              <img alt={name} {...avatar.fixed} className="avatar" />
              <div style={{ textAlign: 'left', marginLeft: 20 }}>
                <p>{totalCount} 篇文章</p>
                <h1>{data.site.siteMetadata.title}</h1>
                <p>{data.site.siteMetadata.description}</p>
              </div>
            </div>
            <div className={'inner-bio'}>
              <Bio text={data.dataJson.speech} />
            </div>
          </div>
        )
      }}
    />
  )
}
