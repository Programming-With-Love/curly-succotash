import * as React from 'react'
import Gitment from 'gitment'
import 'gitment/style/default.css'
import { CommentOptions, MarkdownRemark } from '../graphql-types'
import * as classes from './BlogPost.module.scss'
import Affix from './base/Affix'
import MarkNav from './MarkNav'
import Position from './base/Position'
export interface BlogPostProps {
  slug: string
  commentOptions: CommentOptions
  post: MarkdownRemark
}

class BlogPost extends React.Component<BlogPostProps> {
  div: HTMLDivElement = null
  componentDidMount() {
    this.div = document.createElement('div')
    var gitment = new Gitment({
      id: this.props.slug,
      ...this.props.commentOptions,
    })
    gitment.render(this.div)
    document.getElementById('comment-container').replaceWith(this.div)
  }
  componentWillUnmount() {
    if (this.div) {
      this.div.remove()
    }
  }
  render() {
    const { html, headings } = this.props.post
    const { title, tags, updatedDate, origin } = this.props.post.frontmatter
    return (
      <div className={classes.post}>
        <Position title={`${title}`} />
        <div className={classes.rightNav}>
          <Affix>
            <MarkNav headings={headings} />
          </Affix>
        </div>
        <div className={classes.postContent} dangerouslySetInnerHTML={{ __html: html }} />

        <div id="comment-container" />
      </div>
    )
  }
}

export default BlogPost
