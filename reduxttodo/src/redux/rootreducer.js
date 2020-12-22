import {combineReducers} from 'redux'
import {reducer} from './reducer'
import {modalreducer} from './modalreducer'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// const  persistConfig ={
//     key:'root',
//     storage,
//     whitelist:['modaltask']
// }
const rootreducer =combineReducers({
    todotask: reducer,
    modaltask: modalreducer

})

export default rootreducer