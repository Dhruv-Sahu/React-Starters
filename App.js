import React,{useState,useEffect} from 'react';
import './App.css';

let globalID = 0;

function App() {
  const [task,setTask] =useState("")
  const [todos, setTodos] = useState([])

  function createTodo(event){       //We need to append so we , change the strings value(...oldTodos) 
      event.preventDefault()
      setTask('')
      setTodos(oldTodos => {return [...oldTodos,{todo: task, id: globalID++}]}) //Now v have array of obj
  }
  
  function deleteItem(itemID){
    setTodos(oldTodos =>oldTodos.filter(item => item.id !== itemID))
  }


  return <div>
    <h1>The Best To-do App Ever</h1>
    <form onSubmit={createTodo}>
    <input 
          type="text" 
          value={task} 
          onChange={event =>{
              setTask(event.target.value)
    }}/>
    <button type="Submit">Create Todo</button>
    </form>
    <ul>
      {todos.map((item,index) =>{
        return <div key={item.id}>
        <li>{item.todo}</li>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      })}
    </ul>
  </div>
}

export default App;
