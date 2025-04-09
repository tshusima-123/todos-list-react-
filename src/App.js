
import './App.css';
import Header from "./MyComponents/header"
import Todo from "./MyComponents/Todo"
import Footer from "./MyComponents/Footer"
import AddTodo from './MyComponents/addTodo'
import React, { useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from'./MyComponents/About'

function App() {
  function onDelete (todo)
  {
      console.log("Delete was clicked", todo)
     setTodo( todos.filter((e)=>{
          return e!==todo
      }))
      localStorage.setItem("todos",JSON.stringify(todos))
  }
  function storage(){
  let prevtodo
  if(!localStorage.getItem("todos"))
  {
    prevtodo=[]
  }
  else
  {
    prevtodo=JSON.parse(localStorage.getItem("todos"))
  }
  return prevtodo
}
  const [todos,setTodo] = useState(/*[
    {
       sno:1,
       title:"Go to school",
       desc:"Go there now school"
    },
    {
      sno:2,
      title:"Go to market",
      desc:"Go there now market"
   },
   {
    sno:3,
    title:"Go to mall",
    desc:"Go there now mall"
 }
]*/storage()
)
function add(title,desc)
{
  let sno
  if(todos.length===0)
  {
    sno=0
  }
  else
  {
    sno=todos[todos.length-1].sno+1
  }
  let obj={
    sno:sno,
    title:title,
    desc:desc
   }
   //localStorage.setItem("todos",JSON.stringify(todos))
   setTodo([...todos, obj]);
   console.log(obj)
   
  // localStorage.setItem("todos",JSON.stringify(todos))
}
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
  return (
  <>
  <Router>
    
 <Header title={45} searchBar={false} />
 <Routes>
 <Route exact path='/'element={<><AddTodo add={add}/>
 <Todo todos={todos} onDelete={onDelete}/></>}/>
 </Routes>
 <Routes>
 <Route exact path='/about'element={<About/>} />

 </Routes>
 <Footer/>
 </Router>
</>
  );
}

export default App;
