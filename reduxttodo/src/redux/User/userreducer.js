const { FETCH_USER_REQUERST, FETCH_USER_SUCCESS, FETCH_USER_FAILUER } = require("./UserTypes")

const initialstate ={
    loading:false,
    users:[],
    error:""
}

const reducer=(state=initialstate,action)=>{
switch(action.type){
    case FETCH_USER_REQUERST:
        return{
            ...state,
            loading:true
        }
    case FETCH_USER_SUCCESS:
        return{
            loading:false,
            users:action.payload,
            error:''
        }
    case FETCH_USER_FAILUER:
        return{
            loading:false,
            users:[],
            error:action.payload
        }
    default: return state
    }
}
export default reducer