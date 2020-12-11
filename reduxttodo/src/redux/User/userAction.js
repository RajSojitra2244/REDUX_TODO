import {FETCH_USER_REQUERST,FETCH_USER_SUCCESS,FETCH_USER_FAILUER} from './UserTypes'

export const fetchUserRequest =()=>{
    return{
    type:FETCH_USER_REQUERST
    }
}

export const fetchUserSuccess =(user)=>{
    return{
    type:FETCH_USER_SUCCESS,
    payload:user
    }
}

export const fetchUserFailure =(error)=>{
    return{
    type:FETCH_USER_FAILUER,
    payload:error
    }
}