import {createStore,applyMiddleware} from 'redux'
import persistReducer from '../redux/rootreducer'
import {logger} from 'redux-logger'
import {persistStore} from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';

export let store =createStore(persistReducer, composeWithDevTools (applyMiddleware(logger)));

 export  const persistor = persistStore(store);

 export default {store,persistor};

 