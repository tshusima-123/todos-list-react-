import React from 'react'
import TodoItem from './TodoItem'
export default function Todo(props) {
  return (
    <div>
        {props.todos.length===0? <div className='text-center'>No task to display</div>:
        props.todos.map((todo)=>{
         return   <TodoItem todo={todo} onDelete={props.onDelete}/>
        })}

    
    </div>
  )
}
