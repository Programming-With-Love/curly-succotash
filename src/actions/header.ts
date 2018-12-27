import { TYPE } from './index'
export const SHOW_HEADER: TYPE = 'SHOW_HEADER'
export interface HeaderAction {
  type: TYPE
  showMain: boolean
}
export function showHeader(showMain: boolean): HeaderAction {
  return {
    type: SHOW_HEADER,
    showMain,
  }
}
