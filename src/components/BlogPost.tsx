import * as React from 'react'
import Gitment from 'gitment'
import 'gitment/style/default.css'
import { CommentOptions, MarkdownRemark } from '../graphql-types'
import Helmet from 'react-helmet'
import * as classes from './BlogPost.module.scss'
import PostInner from './inner/PostInner'
import { Link } from 'gatsby'
export interface BlogPostProps {
  slug: string
  commentOptions: CommentOptions
  post: MarkdownRemark
}

class BlogPost extends React.Component<BlogPostProps> {
  componentDidMount() {
    var gitment = new Gitment({
      id: this.props.slug,
      ...this.props.commentOptions,
    })
    gitment.render('comment-container')
  }
  render() {
    const { html } = this.props.post
    const { title, tags, updatedDate, origin } = this.props.post.frontmatter
    return (
      <div className={classes.post}>
        <Helmet title={`${title}`} />
        <PostInner tags={tags} blogTitle={title} Link={Link} />
        <div className={classes.postContent} dangerouslySetInnerHTML={{ __html: html }} />
        <div id="comment-container" />
      </div>
    )
  }
}

export default BlogPost
