import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([
    // ... (todos array)
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, done: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleActiveFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.done);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'active') return !todo.done;
    if (activeFilter === 'completed') return todo.done;
    return false;
  });

  return (
    <section className="todoapp">
      <Header
        newTodo={newTodo}
        handleNewTodoChange={handleNewTodoChange}
        handleNewTodoSubmit={handleNewTodoSubmit}
      />

      <section className="main" hidden={filteredTodos.length === 0}>
        {/* ... */}
        <ul className="todo-list">
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              handleToggleTodo={handleToggleTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      </section>

      <Footer
        todos={todos}
        activeFilter={activeFilter}
        handleActiveFilterChange={handleActiveFilterChange}
        handleClearCompleted={handleClearCompleted}
      />

      <footer className="info">
        {/* ... */}
      </footer>
    </section>
  );
}

export default App;
