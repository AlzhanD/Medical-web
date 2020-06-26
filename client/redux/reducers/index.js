import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import cards from './projects'
import auth from './auth'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    cards,
    auth
  })

export default createRootReducer
