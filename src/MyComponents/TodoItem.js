import React from 'react'

export default function TodoItem({todo,onDelete}) {
  return (
    <div className='text-center my-3' >
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button className='btn btn-danger btn-sm' onClick={()=>onDelete(todo)}>Delete</button>
    
    </div>
  )
}
