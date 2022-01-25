import * as React from 'react'
import * as classes from './Footer.module.scss'
import { StaticQuery, graphql } from 'gatsby'
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
        render={(data: any) => <p>Copyright © 2018 - {data.dataJson.author.name}. All Rights Reserved.@<a style={{color: '#adabac'}} href="http://beian.miit.gov.cn">蜀ICP备18004671号</a> </p>}
      />
      <p>power by GatsbyJs</p>
    </div>
  </footer>
)
