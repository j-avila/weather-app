import { createStore, applyMiddleware, compose } from 'redux'
import { city } from '../reducers/city'
import thunk from 'redux-thunk'

const initialState = {
  city: "Caracas, ve"
} 

const componseEnhancers = window.__REDUX_DEVTOOLS_COMPOSE__ || compose

export const store = createStore(city, initialState, componseEnhancers(applyMiddleware(thunk)))
