import * as React from 'react'
import { Link } from 'gatsby'
import { get } from 'lodash'
import PostItem from '../components/PostItem'
import { MarkdownRemark, MarkdownRemarkConnection, Site, DataJson, ImageSharp } from '../graphql-types'
import * as classes from './blog.module.scss'
import Position from '../components/base/Position'
export interface IndexProps {
  data: {
    posts: MarkdownRemarkConnection
    recents: MarkdownRemarkConnection
  }
}

const BlogPage = (props: IndexProps) => {
  const { data } = props
  return (
    <div className={classes.indexContent}>
      <Position />
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
export default BlogPage
