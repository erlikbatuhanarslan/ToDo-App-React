import React from 'react';

function Header({ newTodo, handleNewTodoChange, handleNewTodoSubmit }) {
  return (
    <header className="header">
      <h1>TODOS app</h1>
      <form onSubmit={handleNewTodoSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={newTodo}
          onChange={handleNewTodoChange}
        />
      </form>
    </header>
  );
}

export default Header;
