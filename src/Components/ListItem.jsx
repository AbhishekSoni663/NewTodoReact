import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext"
import {deleteTodo , editTodo} from "../context/GlobalAction"

function ListItem({todo}){
    const {dispatch} = useContext(GlobalContext)

    const handleDelete = (id)=>{
        const data = deleteTodo(id)

        dispatch({
            type:"DELETE_TODO",
            payload:data
        })
    }
     const handleEdit = (todo) => {
        const data = editTodo(todo)
        dispatch({
            type:"EDIT_TODO",
            payload: data
        })
     }
    return(
        <li className="list-group-item mb-1">
            {todo.text}
            <button className="btn btn-danger float-end ms-1" onClick={()=>handleDelete(todo.id)}>Delete</button>
            <button className="btn btn-secondary float-end"onClick={()=>handleEdit(todo)}>Update</button>
        </li>
    )
}
export default ListItem