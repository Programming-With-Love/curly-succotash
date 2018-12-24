import * as React from 'react'
import { withLayout, LayoutProps, menuItems } from '../components/Layout'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import PostItem from '../components/PostItem'
import { MarkdownRemark, MarkdownRemarkConnection, Site, DataJson, ImageSharp } from '../graphql-types'

export interface IndexProps extends LayoutProps {
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
    <div style={{ paddingTop: 80 }}>
      {data.posts.edges.map(({ node }: { node: MarkdownRemark }, index: number) => {
        const {
          frontmatter,
          timeToRead,
          fields: { slug },
          excerpt,
          wordCount,
        } = node
        const cover = get(frontmatter, 'image.children.0.fixed', {})
        return (
          <PostItem
            words={wordCount.words}
            key={slug}
            cover={cover}
            title={frontmatter.title}
            timeToRead={timeToRead}
            updatedDate={frontmatter.updatedDate}
            href={slug}
            excerpt={excerpt}
          />
        )
      })}
    </div>
  )
}

export default withLayout(IndexPage)

export const pageQuery = graphql`
  query PageBlog {
    # Get tags
    tags: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

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
            updatedDate(formatString: "DD MMMM, YYYY")
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
