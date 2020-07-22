import { combineReducers } from 'redux'
import { createStore } from 'redux'
import presentation from './presentation/reducer'
import post from './post/reducer'

const rootReducer = combineReducers({
  presentation,
  post
})

export default createStore(rootReducer)