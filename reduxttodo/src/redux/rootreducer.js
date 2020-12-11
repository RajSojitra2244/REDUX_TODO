import {combineReducers} from 'redux'
import {reducer} from './reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const  persistConfig ={
    key:'root',
    storage,
    whitelist:['todotask']
}
const rootreducer =combineReducers({
    todotask: reducer
})

export default persistReducer(persistConfig,rootreducer)