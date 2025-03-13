import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, setFilter } from '../actions';

const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const text = prompt('Enter a task:');
    if (text) {
      dispatch(addTodo(text));
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'COMPLETED') return todo.completed;
    if (filter === 'PENDING') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        <button onClick={() => handleFilterChange('ALL')}>All</button>
        <button onClick={() => handleFilterChange('COMPLETED')}>Completed</button>
        <button onClick={() => handleFilterChange('PENDING')}>Pending</button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;