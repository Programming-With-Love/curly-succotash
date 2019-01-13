import { HeaderAction, TYPE_HEADER_INNER } from '../actions/header'
import { InnerProps } from '../components/inner'
import { HeaderState } from '../state'
import { HeaderType } from '../contants/header'

const initialState: HeaderState = {
  headerType: HeaderType.AUTHOR_HEADER,
  data: null,
}

export default (state = initialState, action: HeaderAction) => {
  switch (action.type) {
    case TYPE_HEADER_INNER:
      return {
        ...state,
        headerType: action.headerType,
        data: action.data,
      }
  }
  return state
}
