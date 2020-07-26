import { SET_PRESENTATION } from "./actions/getPresentation"

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRESENTATION:
      return action.payload
    default:
      return state
  }
}