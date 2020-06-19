import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import cards from './projects'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    cards
  })

export default createRootReducer
