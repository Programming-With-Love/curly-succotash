import * as React from 'react'
import 'gitalk/dist/gitalk.css'
import loadable from '@loadable/component'
import { gitment_2, MarkdownRemark } from '../graphql-types'
import * as classes from './BlogPost.module.scss'
import Affix from './base/Affix'
import MarkNav from './MarkNav'
import Position from './base/Position'
import Main from './Main'
const GitalkComponent = loadable(() => import('gitalk/dist/gitalk-component'))
export interface BlogPostProps {
  slug: string
  commentOptions: gitment_2
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
            clientID={this.props.commentOptions.oauth.client_id}
            clientSecret={this.props.commentOptions.oauth.client_secret}
            repo={this.props.commentOptions.repo}
            owner={this.props.commentOptions.owner}
            admin={this.props.commentOptions.owner}
            id={this.props.slug}
            proxy={this.props.commentOptions.crossServer}
          />
          {this.props.children}
        </div>
      </Main>
    )
  }
}

export default BlogPost
