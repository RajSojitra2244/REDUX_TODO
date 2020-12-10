import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodo, updateTodo} from '../redux/action'
function TodoItem({todo}) {
    const [edit, setedit] = useState(false)
    const [name, setname] = useState(todo.name)

    let  dispatch = useDispatch()
    return (
        <div >
          <div className="row mx-2 align-items-center"  style={{ justifyContent:"center"}}>
              <div>#{todo.id.length >1? todo.id[2]:todo.id}</div>
              
              <div className="col-2 " style={{justifyContent:"center"}}>
               {edit? <input type="text"  
               onChange={(e)=>setname(e.target.value)} 
               value={name} 
               placeholder={todo.name}/>:<h4>{todo.name}</h4>} 
             </div>

    <button className="btn btn-primary m-2" onClick={()=>{
            dispatch(updateTodo(
                {
                    ...todo,
                    name: name
                }
            ))
            if(edit)
            { 
                setname(todo.name);
            }
            setedit(!edit)
    }}>{edit?"Update":"Edit"}</button>
              <button  onClick={()=>dispatch(deleteTodo(todo.id))}  className="btn btn-danger m-2">Delete</button>


          </div>
        </div>
    )
}

export default TodoItem
