import { HeaderAction, TYPE_HEADER_INNER } from '../actions/header'
import { HeaderState } from '../state'
import { HeaderType } from '../contants/header'

const initialState: HeaderState = {
  headerType: HeaderType.AUTHOR_HEADER,
  data: null,
}

export default (state = initialState, action: HeaderAction) => {
  console.log('\n---------------reduce-------------')
  console.log(state)
  console.log(action)
  switch (action.type) {
    case TYPE_HEADER_INNER:
      return {
        ...state,
        headerType: action.headerType,
        data: action.data,
      }
    default:
      return state
  }
}
