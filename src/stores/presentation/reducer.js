import { GET_PRESENTATION } from "./actions/getPresentation"

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRESENTATION:
      return action.payload
    default:
      return state
  }
}