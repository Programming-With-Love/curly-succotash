import { HeaderType } from './contants/header'
import { InnerProps } from './components/inner'

export interface HeaderState {
  headerType: HeaderType
  data: InnerProps
}

export interface StoreState {
  header: HeaderState
  boom: 0 | 1
}
