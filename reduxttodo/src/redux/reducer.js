import{ADD_TODO,DELETE_TODO,UPDATE_TODO} from './action'
import {todos} from './state'

export let reducer=(state = todos,action)=>{
    let newtodo
    switch(action.type){
        case ADD_TODO:
             newtodo=[...state]
            newtodo.push(action.payload)
            return newtodo
        case DELETE_TODO:
            newtodo =[...state]
            newtodo =newtodo.filter(todo=>todo.id != action.payload)
            return newtodo
           
        case UPDATE_TODO:
          newtodo = [...state]
          let index = -1;
          for(let i = 0; i<newtodo.length; i++){
              index++
            if(newtodo[i].id == action.payload.id){
                break;
            }
          }
        //   console.log(index);
          if(index != -1){
              newtodo[index] = action.payload
              console.log(newtodo);
              return newtodo
          }
     
            }
            return state;
}