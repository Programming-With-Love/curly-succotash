import * as React from 'react'
import Gitment from 'z-gitment'
import 'gitment/style/default.css'
import { gitment_2, MarkdownRemark } from '../graphql-types'
import * as classes from './BlogPost.module.scss'
import Affix from './base/Affix'
import MarkNav from './MarkNav'
import Position from './base/Position'
import Main from './Main'
export interface BlogPostProps {
  slug: string
  commentOptions: gitment_2
  post: MarkdownRemark
}

class BlogPost extends React.Component<BlogPostProps> {
  div: HTMLDivElement = null
  componentDidMount() {
    this.div = document.createElement('div')
    let gitment = new Gitment({
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
    const { title } = this.props.post.frontmatter
    return (
      <Main>
        <div className={classes.post}>
          <Position title={`${title}`} />
          <div className={classes.postContent} dangerouslySetInnerHTML={{ __html: html }} />
          <div className={classes.rightNav}>
            <Affix>
              <MarkNav headings={headings} />
            </Affix>
          </div>
          <div id="comment-container" />
        </div>
      </Main>
    )
  }
}

export default BlogPost
