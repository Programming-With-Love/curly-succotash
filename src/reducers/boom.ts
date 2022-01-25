import { BoomAction, TYPE_BOOM } from '../actions/authorInner'

export default (state = 0, action: BoomAction) => {
  switch (action.type) {
    case TYPE_BOOM:
      return 1
    default:
      return state
  }
}
