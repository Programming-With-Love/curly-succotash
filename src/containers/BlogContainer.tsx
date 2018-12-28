import * as React from 'react'
import { Link } from 'gatsby'
import { get } from 'lodash'
import PostItem from '../components/PostItem'
import { MarkdownRemark, MarkdownRemarkConnection, Site, DataJson, ImageSharp } from '../graphql-types'
import * as classes from './blog.module.scss'
import { StoreState } from '../state'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { showHeader } from '../actions/header'
export interface IndexProps {
  data: {
    posts: MarkdownRemarkConnection
    recents: MarkdownRemarkConnection
    dataJson: DataJson
  }
}

const BlogPage = (props: IndexProps) => {
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

// const mapStateToProps = (state: StoreState) => ({
//   header: state.header.showMain,
// })

// function mapDispatchToProps(dispatch: Dispatch) {
//   return bindActionCreators({ showHeader }, dispatch)
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(BlogPage)
export default BlogPage
