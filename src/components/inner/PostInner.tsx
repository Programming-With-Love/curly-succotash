import * as React from 'react'
import './PostInner.scss'
import TagsCard from '../TagsCard'
import { StaticQuery, graphql, Link } from 'gatsby'
import { MarkdownRemark } from '../../graphql-types'
export default () => (
  <StaticQuery
    query={graphql`
      query InnerPost($slug: String!) {
        post: markdownRemark(fields: { slug: { eq: $slug } }) {
          frontmatter {
            tags
            title
            origin
          }
        }
      }
    `}
    render={(data: { post: MarkdownRemark }) => {
      const { post } = data
      return (
        <div className="post-inner">
          <div className="tags-header-container">
            <TagsCard tags={post.frontmatter.tags} Link={Link} origin={post.frontmatter.origin} />
          </div>
          <h1>{post.frontmatter.title}</h1>
        </div>
      )
    }}
  />
)
