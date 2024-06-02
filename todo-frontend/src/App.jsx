import React from 'react';
import Todo from './components/todo';
import './index.css';

function App() {
  return (
    <div className='App'>
      <h1 className='welcome-message'>Welcome to the todo list..!!</h1>
      <Todo />
    </div>
  );
}

export default App;
