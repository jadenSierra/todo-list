import React, {useState} from 'react';
import './App.css';
import TodoDisplay from './components/TodoDisplay';
import TodoInput from './components/TodoInput';


function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);


  const handleSubmit = e => {
    e.preventDefault();

    if(newTodo.length === 0) {
      return
    }

    const todoObj = {
      name: newTodo,
      complete: false
    }
    setTodos([...todos, todoObj])
    setNewTodo("")
  }

  const handleDelete = (idx) => {
    const filtered = todos.filter((todo, i) => {
      return i !== idx;
    })
    setTodos(filtered);
    console.log(todos)
  }

  const handleCheckedChange = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if(i === idx){
        const updatedTodo = {...todo, complete: !todo.complete};
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos)
  }

  return (
    <div className="App">
        <TodoInput handleSubmit={handleSubmit} newTodo={newTodo} setNewTodo={setNewTodo}/>
        {todos.map((todo,i) => {
        return <TodoDisplay key={i} todo={todo} handleCheckedChange={handleCheckedChange} i={i} handleDelete={handleDelete}/>
      })}
    </div>
  );
}

export default App;
