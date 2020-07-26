import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import presentation from './presentation/reducer'
import post from './post/reducer'
import suggetion from './suggetion/reducer'

const rootReducer = combineReducers({
  presentation,
  post,
  suggetion
})

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)