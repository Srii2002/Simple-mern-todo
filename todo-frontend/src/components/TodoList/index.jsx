import React from 'react';
import { TodoSection, Button } from '../todo/styles';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoSection key={todo._id}>
          <h4>{todo.title}</h4>
          <p>{todo.description}</p>
          <Button onClick={() => updateTodo(todo._id, todo.title, todo.description, !todo.completed)}>
            {todo.completed ? 'Mark as Uncompleted' : 'Mark as Completed'}
          </Button>
          <Button onClick={() => deleteTodo(todo._id)}>Delete</Button>
        </TodoSection>
      ))}
    </div>
  );
};

export default TodoList;
