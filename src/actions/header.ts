import { TYPE } from './index'
import { HeaderType } from '../contants/header'
import { InnerProps } from '../components/inner'
export const TYPE_HEADER_INNER = 'TYPE_HEADER_INNER'

export interface HeaderAction {
  type: TYPE
  headerType: HeaderType
  data: InnerProps
}

//控制header inner显示
export function showHeader(headerType: HeaderType, data?: InnerProps): HeaderAction {
  return {
    type: TYPE_HEADER_INNER,
    headerType: headerType,
    data,
  }
}
