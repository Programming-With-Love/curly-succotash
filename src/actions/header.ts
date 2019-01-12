import { TYPE } from './index'
import { HeaderType } from '../contants/header'
export const TYPE_HEADER_INNER = 'TYPE_HEADER_INNER'

export interface HeaderAction {
  type: TYPE
  payload: HeaderType
}

//控制header inner显示
export function showHeader(headerType: HeaderType): HeaderAction {
  return {
    type: TYPE_HEADER_INNER,
    payload: headerType,
  }
}
