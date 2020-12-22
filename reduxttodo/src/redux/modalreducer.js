import{ADD_TODO,DELETE_TODO,UPDATE_TODO,Edit_TODO,Open_Modal,Close_Modal} from './action'
import {modal} from './state'


export let modalreducer=(state = modal,action)=>{
    let Data
    switch(action.type){

        case Open_Modal:
                Data= action.payload 
             return Data
             default:   return state
    }
}