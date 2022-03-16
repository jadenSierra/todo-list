import React from 'react'

function todoInput({ handleSubmit, setNewTodo, newTodo }) {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type={"text"}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default todoInput