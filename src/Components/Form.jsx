import { useContext, useEffect, useState } from 'react';

import { saveTodo, updateTodo} from '../context/GlobalAction';
import GlobalContext from '../context/GlobalContext';

function Form(){

const {edit , dispatch} = useContext(GlobalContext)

const[text,setText] = useState("")

const handleSubmit =(e) => {
  e.preventDefault()
  if(edit.isEdit){
    const data = updateTodo(edit.todo.id, text)
    dispatch({
      type:"UPDATE_TODO",
      payload : data
    })
  }else{
    const data = saveTodo(text)
    dispatch({
      type: "SAVE_TODO",
      payload:data
    })
  }
  setText("")
}

useEffect(()=>{
  setText(edit.todo.text)
}, [edit])

  return(
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <input value={text} type="text" className='form-control rounded-0' required onChange={(e)=> setText(e.target.value)}/>
      </div>
      <button tpye="submit" className='btn btn-primary'>Submit</button>
    </form>
  )
}
export default Form