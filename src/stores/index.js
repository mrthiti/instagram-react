import { combineReducers } from 'redux'
import { createStore } from 'redux'
import presentation from './presentation/reducer'
import post from './post/reducer'
import suggetion from './suggetion/reducer'

const rootReducer = combineReducers({
  presentation,
  post,
  suggetion
})

export default createStore(rootReducer)