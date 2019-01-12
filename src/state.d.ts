import { HeaderType } from './contants/header'
import { InnerProps } from './components/inner'

export interface StoreState {
  header: {
    headerType: HeaderType
    data: InnerProps
  }
}
