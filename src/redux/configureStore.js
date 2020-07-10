import { createStore, applyMiddleware, compose } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from './reducers'

export default function configureStore(initalState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
    rootReducer,
    initalState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  )
}
