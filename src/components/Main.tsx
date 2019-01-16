import * as React from 'react'
import * as classes from './Main.module.scss'
import classnames from 'classnames'
export default (
  props: React.HTMLProps<HTMLMainElement> & {
    extra?: React.ReactElement<any>
  }
) => {
  const tProps = {
    ...props,
    className: classnames(classes.mainRoot, props.className),
  }
  delete tProps.extra
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <main {...tProps} />
      {props.extra}
    </div>
  )
}
