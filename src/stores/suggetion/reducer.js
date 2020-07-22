import { GET_SUGGETION } from "./actions/getSuggetion"

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUGGETION:
      return action.payload
    default:
      return state
  }
}