import * as React from 'react'
import { init } from 'ityped'
import './bio.scss'
export interface BioProps {
  text: string[]
}

export default class Bio extends React.Component<BioProps & React.HTMLProps<HTMLParagraphElement>> {
  bio = React.createRef<HTMLParagraphElement>()
  componentDidMount() {
    init(this.bio.current, { showCursor: true, strings: this.props.text })
  }
  render() {
    return <span ref={this.bio} {...this.props} />
  }
}
