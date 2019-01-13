import { PostInnerProps } from './PostInner'
import { ImageSharp } from '../../graphql-types'

export interface WithBackgroundProps extends PostInnerProps {
  image?: ImageSharp | string | null
}

export type InnerProps = WithBackgroundProps | null
