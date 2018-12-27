import { HeaderAction, SHOW_HEADER } from '../actions/header'

const initialState = {
  showMain: true,
}

export default (state = initialState, action: HeaderAction) => {
  switch (action.type) {
    case SHOW_HEADER:
      return {
        ...state,
        showMain: action.showMain,
      }
  }
  return state
}
