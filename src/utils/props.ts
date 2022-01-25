import * as React from 'react'

export const withDefaultProps = <P extends object, DP extends Partial<P> = Partial<P>>(
  defaultProps: DP,
  Cmp: React.ComponentType<P>
) => {
  type RequiredProps = Subtract<P, DP>
  type Props = Partial<DP> & RequiredProps
  Cmp.defaultProps = defaultProps
  return Cmp as React.ComponentType<Props>
}
