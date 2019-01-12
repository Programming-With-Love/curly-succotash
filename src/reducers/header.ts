import { HeaderAction, TYPE_HEADER_INNER } from '../actions/header'

const initialState = {
  showMain: true,
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
