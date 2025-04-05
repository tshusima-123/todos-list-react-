
import './App.css';
import Header from "./MyComponents/header"
import Todo from "./MyComponents/Todo"
import Footer from "./MyComponents/Footer"
import React, { useState } from 'react';
function App() {
  function onDelete (todo)
  {
      console.log("Delete was clicked", todo)
     setTodo( todos.filter((e)=>{
          return e!==todo
      }))
  }
  
  const [todos,setTodo] = useState([
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
]
)
  return (
  <>
 <Header title={45} searchBar={false} />
 <Todo todos={todos} onDelete={onDelete}/>
 <Footer/>
</>
  );
}

export default App;
