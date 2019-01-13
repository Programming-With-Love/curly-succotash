import * as React from 'react'
import * as classes from './Footer.module.scss'
import { StaticQuery, graphql } from 'gatsby'
import { Query } from '../graphql-types'
export default () => (
  <footer className={classes.footer}>
    <div className={classes.footerInner} data-reactid="130">
      <StaticQuery
        query={graphql`
          {
            dataJson {
              author {
                name
              }
            }
          }
        `}
        render={(data: Query) => <p>Copyright © 2018 - {data.dataJson.author.name}. All Rights Reserved. </p>}
      />
      <p>power by GatsbyJs</p>
    </div>
  </footer>
)
