import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodo, editTodo, updateTodo} from '../redux/action'
function TodoItem({todo}) {
    // const Alldata= localStorage.getItem('TODO')
    const [edit, setedit] = useState(false)
    // console.log(Alldata);
    const [name, setname] = useState(todo.name)

    let  dispatch = useDispatch()
    return (
        <div >
          <div className="row mx-2 align-items-center"  style={{ justifyContent:"center"}}>
              {/* <div>#{todo.id.length >1? todo.id[2]:todo.id}</div> */}
              
              <div className="col-3 " style={{justifyContent:"center"}}>
               {edit === true? 
                <input type="text"  
               onChange={(e)=>setname(e.target.value)} 
               value={name} 
               placeholder={todo.name}/>               
               :<h4>{todo.name}</h4>} 
             </div>

    <button className="btn btn-primary m-2" onClick={()=>{
          console.log(todo);
        //   const Index = todo.fin
            if(edit)
            { 
                dispatch(updateTodo(
                    {
                        ...todo,
                        name: name,
                        // status:false
            
                    }
                ))
            }
            setname(todo.name);
            setedit(!edit)
            // dispatch(editTodo(todo))
            // console.log(todo);
}}>{edit?"Update":"Edit"}</button>
              <button  onClick={()=>dispatch(deleteTodo(todo.id))}  className="btn btn-danger m-2">Delete</button>


          </div>
        </div>
    )
}

export default TodoItem
