import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer/countries'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/countries'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
//console.log(store.getState())
export default store;