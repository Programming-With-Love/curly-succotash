import { TYPE } from './index'
export const TYPE_BOOM = 'TYPE_BOOM'

export interface BoomAction {
  type: TYPE
}

export function boom(): BoomAction {
  return {
    type: TYPE_BOOM,
  }
}
