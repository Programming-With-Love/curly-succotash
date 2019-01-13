import * as React from 'react'
import * as classes from './Main.module.scss'
import classnames from 'classnames'
export default (props: React.HTMLProps<HTMLMainElement>) => {
  const tProps = {
    ...props,
    className: classnames(classes.mainContainer, props.className),
  }
  return <main {...tProps} />
}
