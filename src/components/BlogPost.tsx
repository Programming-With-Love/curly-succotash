import * as React from 'react'
import 'gitalk/dist/gitalk.css'
import loadable from '@loadable/component'
// import from 'gitalk/dist/gitalk-component'
import { DataJsonGitment, MarkdownRemark } from '../graphql-types'
import * as classes from './BlogPost.module.scss'
import Affix from './base/Affix'
import MarkNav from './MarkNav'
import Position from './base/Position'
import Main from './Main'
const GitalkComponent = loadable(() => import('gitalk/dist/gitalk-component'))
export interface BlogPostProps {
  slug: string
  commentOptions: DataJsonGitment
  post: MarkdownRemark
}

class BlogPost extends React.Component<BlogPostProps> {
  div: HTMLDivElement = null
  componentDidMount() {
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
          {
            headings.length > 0 ? <div className={classes.rightNav}>
              <Affix>
                <MarkNav headings={headings} />
              </Affix>
            </div> : null
          }
          <GitalkComponent
            options={{
              ...this.props.commentOptions,
              id: this.props.slug,
              clientID: this.props.commentOptions.client_id,
              clientSecret: this.props.commentOptions.client_secret,
              title,
            }}
          />
          {this.props.children}
        </div>
      </Main>
    )
  }
}

export default BlogPost
