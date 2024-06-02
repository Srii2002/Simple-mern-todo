import React, { useEffect, useState } from 'react';
import { Container, Section, Button, TodoSection, Title, TodoContainer, FormContainer, TextArea, Input, AddButton } from './styles';
import axios from 'axios';
import TodoList from '../../components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todo() {
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [activeSection, setActiveSection] = useState('uncompleted');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/todos');
      setTodos(response.data);
    } catch (error) {
      toast.error("Failed to fetch todos");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (inputTitle.trim() === '' || inputDescription.trim() === '') {
      toast.warn("Please fill in both title and description");
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/todos', {
        title: inputTitle,
        description: inputDescription,
        completed: false
      });
      setTodos([...todos, response.data]);
      setInputTitle('');
      setInputDescription('');
      toast.success("Todo added successfully");
    } catch (error) {
      toast.error("Failed to add todo");
    }
  };

  const updateTodo = async (id, title, description, completed) => {
    try {
      const response = await axios.put(`http://localhost:8000/todos/${id}`, { title, description, completed });
      const updatedTodos = todos.map(todo => {
        if (todo._id === id) {
          return { ...todo, title, description, completed: response.data.completed };
        }
        return todo;
      });
      setTodos(updatedTodos);
      toast.success("Todo updated successfully");
    } catch (error) {
      toast.error("Failed to update todo");
    }
  };

  const deleteTodo = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(`http://localhost:8000/todos/${id}`);
      if (response.status === 200) {
        const updatedTodos = todos.filter(todo => todo._id !== id);
        const deletedTodo = todos.find(todo => todo._id === id);
        setTodos(updatedTodos);
        setDeletedTodos([...deletedTodos, deletedTodo]);
        toast.success("Todo deleted successfully");
      } else {
        toast.error("Failed to delete todo");
      }
    } catch (error) {
      toast.error("Failed to delete todo");
    }
  };

  const renderSection = () => {
    if (activeSection === 'uncompleted') {
      return <TodoList todos={todos.filter(todo => !todo.completed)} updateTodo={updateTodo} deleteTodo={deleteTodo} />;
    } else if (activeSection === 'completed') {
      return <TodoList todos={todos.filter(todo => todo.completed)} updateTodo={updateTodo} deleteTodo={deleteTodo} />;
    } else if (activeSection === 'deleted') {
      return <TodoList todos={deletedTodos} updateTodo={() => {}} deleteTodo={deleteTodo} />;
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Title>Todo List</Title>
      <FormContainer onSubmit={addTodo}>
        <Input 
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          placeholder="Title"
        />
        <TextArea 
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
          placeholder="Description"
        />
        <AddButton type="submit">Add Todo</AddButton>
      </FormContainer>
      <Section>
        <Button onClick={() => setActiveSection('uncompleted')}>Uncompleted Tasks</Button>
        <Button onClick={() => setActiveSection('completed')}>Completed Tasks</Button>
        <Button onClick={() => setActiveSection('deleted')}>Deleted Tasks</Button>
      </Section>
      <TodoContainer>
        {renderSection()}
      </TodoContainer>
    </Container>
  );
}

export default Todo;
