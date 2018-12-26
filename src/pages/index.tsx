import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { get } from 'lodash'
import PostItem from '../components/PostItem'
import { MarkdownRemark, MarkdownRemarkConnection, Site, DataJson, ImageSharp } from '../graphql-types'
import * as classes from './Index.module.scss'
export interface IndexProps {
  data: {
    posts: MarkdownRemarkConnection
    recents: MarkdownRemarkConnection
    site: Site
    dataJson: DataJson
  }
}

const IndexPage = (props: IndexProps) => {
  const { data } = props
  return (
    <div className={classes.indexContent}>
      {data.posts.edges.map(({ node }: { node: MarkdownRemark }, index: number) => {
        const {
          frontmatter,
          timeToRead,
          fields: { slug },
          excerpt,
          wordCount,
        } = node
        const cover = get(frontmatter, 'image.children.0.fixed', {})
        const tags = node.frontmatter.tags
        return (
          <PostItem
            words={wordCount.words}
            key={slug}
            cover={cover}
            title={frontmatter.title}
            origin={frontmatter.origin}
            timeToRead={timeToRead}
            updatedDate={frontmatter.updatedDate}
            href={slug}
            excerpt={excerpt}
            Link={Link}
            tags={tags}
          />
        )
      })}
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query PageBlog {
    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: { frontmatter: { draft: { ne: true } }, fileAbsolutePath: { regex: "/blog/" } }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          wordCount {
            words
          }
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            updatedDate(formatString: "YYYY年MM月DD日")
            tags
            origin
            image {
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
    }

    dataJson {
      avatar {
        children {
          ... on ImageSharp {
            fixed(width: 35, height: 35) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
