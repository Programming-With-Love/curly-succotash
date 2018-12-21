import * as React from 'react'
import { Link } from 'gatsby'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu'
import { withLayout, LayoutProps, menuItems } from '../components/Layout'
// import { Button, Segment, Container, Grid, Header, Icon } from 'semantic-ui-react'
import Button from '@material-ui/core/Button'

const IndexPage = (props: LayoutProps) => (
  <div>
    <Button variant="contained" color="primary">
      hello world
    </Button>
  </div>
)

export default withLayout(IndexPage)
