import React from 'react';

function Footer({ todos, activeFilter, handleActiveFilterChange, handleClearCompleted }) {
  const todoLeft = todos.filter((todo) => !todo.done).length;

  return (
    <footer className="footer" hidden={todos.length === 0}>
      <span className="todo-count">
        <strong>{todoLeft}</strong> {todoLeft === 1 ? 'item' : 'items'} left
      </span>

      <ul className="filters">
        <li>
          <a
            className={activeFilter === 'all' ? 'selected' : ''}
            onClick={() => handleActiveFilterChange('all')}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={activeFilter === 'active' ? 'selected' : ''}
            onClick={() => handleActiveFilterChange('active')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={activeFilter === 'completed' ? 'selected' : ''}
            onClick={() => handleActiveFilterChange('completed')}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={handleClearCompleted}>
        Clear Completed
      </button>
      <footer className="info">
        <p>Created by <a href="https://www.linkedin.com/in/batuhan-arslan-42960a267/">ERLİK BATUHAN ARSLAN</a></p>
      </footer>
    </footer>
    
  );
}

export default Footer;
