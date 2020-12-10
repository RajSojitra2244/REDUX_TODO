import React,{useState} from 'react'
import { addTodo } from '../redux/action'
import {v1 as uuid} from 'uuid'
import {useDispatch} from 'react-redux'
function TodoInput() {
    const[name,setName]=useState()
    const dispatch = useDispatch()
    return (
        <div>
               <div className="row m-2 control-form" style={{ justifyContent:"center"}}>
                   <input type="text"  
                   value={name} 
                   onChange={(e)=>setName(e.target.value)}                                                          
                   className="m-2" 
                   placeholder="Enter name"/>

                   <button  onClick={()=>{
                      dispatch (addTodo(
                           {
                             id:uuid(),
                             name:name
                           }
                        )
                      )
                           setName('')
                         }} 
                         className="btn btn-dark m-2">Add</button>
               </div>
        </div>
    )
}

export default TodoInput
