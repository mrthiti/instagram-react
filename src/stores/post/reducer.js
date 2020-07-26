import { SET_POST } from "./actions/getPost"

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return action.payload
    default:
      return state
  }
}