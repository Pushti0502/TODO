import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <input type="checkbox" checked={todo.completed} />
      <p>{todo.text}</p>
    </div>
  );
};

export default Todo;
