let nextTodoId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    id: nextTodoId++,
    text,
    completed: false,
  },
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
});
