import React from 'react';

function TodoItem({ todo, index, handleToggleTodo, handleDeleteTodo }) {
  return (
    <li className={todo.done ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.done}
          onChange={() => handleToggleTodo(index)}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => handleDeleteTodo(index)}></button>
      </div>
    </li>
  );
}

export default TodoItem;
