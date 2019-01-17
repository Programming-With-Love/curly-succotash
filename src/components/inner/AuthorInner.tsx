import * as React from 'react'
import { ImageSharp, Query } from '../../graphql-types'
import Bio from '../Bio'
import './AuthorInner.scss'
import { StaticQuery, graphql } from 'gatsby'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { boom } from '../../actions/authorInner'
import { debounce } from 'lodash'
export interface AuthorInnerProps {
  boom(): void
}

interface AuthorInnerState {
  count: number
}

export class AuthorInner extends React.Component<AuthorInnerProps, AuthorInnerState> {
  state: AuthorInnerState = {
    count: 0,
  }
  private countDown = debounce(() => {
    if (this.state.count < 20) {
      this.setState({
        count: 0,
      })
    } else {
      this.props.boom()
    }
  }, 300)

  private handleClick = () => {
    this.setState({
      count: ++this.state.count,
    })
    this.countDown()
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title
                description
              }
            }
            allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } }, fileAbsolutePath: { regex: "/blog/" } }) {
              totalCount
            }
            dataJson {
              author {
                name
                avatar {
                  children {
                    ... on ImageSharp {
                      fixed(width: 80, height: 80) {
                        src
                        srcSet
                      }
                    }
                  }
                }
              }
              speech
            }
          }
        `}
        render={(data: Query) => {
          const avatar = data.dataJson.author.avatar.children[0] as ImageSharp
          const totalCount = data.allMarkdownRemark.totalCount
          const { name } = data.dataJson.author
          return (
            <div className="person-header">
              <div className="author-inner">
                <div>
                  <img alt={name} {...avatar.fixed} className="avatar" onClick={this.handleClick} />
                </div>
                <div style={{ textAlign: 'left', marginLeft: 20 }}>
                  <p>{totalCount} 篇文章</p>
                  <h1>{data.site.siteMetadata.title}</h1>
                  <p>{data.site.siteMetadata.description}</p>
                </div>
              </div>
              <div className={'inner-bio'}>
                <Bio text={data.dataJson.speech} />
              </div>
            </div>
          )
        }}
      />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      boom,
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(AuthorInner)
