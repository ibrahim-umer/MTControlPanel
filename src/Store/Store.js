import { applyMiddleware, createStore } from 'redux'
import userReducer from './User/Reducer'

function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch', action)
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }

const store =  createStore(userReducer,applyMiddleware(logger));

export default store;
