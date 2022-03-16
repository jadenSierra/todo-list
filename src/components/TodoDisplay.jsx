import React from 'react'

function TodoDisplay({handleCheckedChange, todo, i, handleDelete}) {
  return (
    <div>
          <input onChange={(e) => handleCheckedChange(i)} checked={todo.complete} type={"checkbox"}></input>
          <span style={{textDecoration: (todo.complete ? "line-through" : "none") }}>{todo.name}</span>
          <button style={{marginLeft: "1rem"}} onClick={(e) => handleDelete(i)}>Delete</button>
          </div>
  )
}

export default TodoDisplay