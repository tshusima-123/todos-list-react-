import React, { useState } from 'react'
export default function AddTodo(props) {
    const[title,setTitle]=useState("")
    const[desc,setDesc]=useState("")
     function submit1(e){
        e.preventDefault()
        if(!title || !desc)
        {
            alert("field cannot be empty")
        }
        else{
       console.log(title,desc)
       props.add(title,desc)
       setTitle("")
       setDesc("")
    }
    }
  return (
    <div className='d-flex flex-col justify-content-center '>
      <form className='' onSubmit={submit1}>
        <div >
        <label className='ms-5 'for='title'>Add Todo item</label>
        </div><div>
        <input type='text' className='width-1150' id='title' onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div>
        <label className='ms-3' for='desc'>Add Todo descirption</label>
        </div><div>
        <input type='text' className='width-1150' id='desc' onChange={(e)=>setDesc(e.target.value)}/>
        </div>
        <div className='d-flex justify-content-center my-3'>
        <button  type='submit' className='bg-success'>add</button>
        </div>
      </form>
    </div>
  )
}
