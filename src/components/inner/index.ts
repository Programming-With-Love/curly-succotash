import { PostInnerProps } from './PostInner'

export interface WithBackgroundProps extends PostInnerProps {
  image?: any
}

export type InnerProps = WithBackgroundProps | null
