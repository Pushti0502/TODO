import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/todos/gettodos')
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="todo-list">
      {todos.map(todo => <Todo key={todo._id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
