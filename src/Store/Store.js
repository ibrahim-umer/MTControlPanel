import { applyMiddleware, createStore } from 'redux'
import userReducer from './User/Reducer'

function logger({ getState }) {
    return next => action => {
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }

const store =  createStore(userReducer,applyMiddleware(logger));

export default store;
