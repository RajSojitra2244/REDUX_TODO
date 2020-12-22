import {createStore,applyMiddleware} from 'redux'
import rootreducer from '../redux/rootreducer'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';

export let store =createStore(rootreducer, composeWithDevTools (applyMiddleware(logger,thunk)));

//  export  const persistor = persistStore(store);

 export default store;

 