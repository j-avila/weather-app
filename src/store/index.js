import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers  from './../reducers'

const initialState = {
  city: "Caracas, ve",
} 

const componseEnhancers = compose(
  applyMiddleware(thunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__() 
); 

export const store = createStore(reducers, initialState, componseEnhancers)
