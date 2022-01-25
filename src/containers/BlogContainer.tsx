import * as React from 'react'
import { Link } from 'gatsby'
import PostItem from '../components/PostItem'
import * as classes from './blog.module.scss'
import BlogPagination from '../components/Pagination'
import NoData from '../components/base/NoData'
export interface IndexProps {
  data: {
    posts: any
  }
  location: {
    pathname: string
  }
  pageContext: {
    headers: any
  }
}

const BlogPage = (props: IndexProps) => {
  const { data } = props
  if (!data.posts) {
    return <NoData />
  } else {
    const pageCount = Math.ceil(data.posts.totalCount / 10)
    const { pathname } = props.location

    return (
      <div className={classes.indexContent}>
        <div/>
        {data.posts.edges.map(({ node }: { node: any }) => {
          const {
            frontmatter,
            timeToRead,
            fields: { slug },
            excerpt,
            wordCount,
          } = node

          const cover = props.pageContext.headers[slug]
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
        <BlogPagination Link={Link} pathname={pathname} pageCount={pageCount} />
      </div>
    )
  }
}
export default BlogPage
