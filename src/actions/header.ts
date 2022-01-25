import { TYPE } from './index'
import { HeaderType } from '../contants/header'
import { InnerProps } from '../components/inner'
import { Action } from 'redux'
export const TYPE_HEADER_INNER = 'TYPE_HEADER_INNER'

export interface HeaderAction extends Action<TYPE>{
  type: TYPE
  headerType: HeaderType
  data: InnerProps
}

// 控制header inner显示
export function showHeader(headerType: HeaderType, data?: InnerProps): HeaderAction {
  return {
    type: TYPE_HEADER_INNER,
    headerType,
    data,
  }
}
