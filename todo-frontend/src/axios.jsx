import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // Assuming your backend is running on localhost:8000
});

export const getTodos = async () => {
  try {
    const response = await instance.get('/todos');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch todos');
  }
};

export const createTodo = async (todoData) => {
  try {
    const response = await instance.post('/todos', todoData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create todo');
  }
};

export const updateTodo = async (id, todoData) => {
  try {
    const response = await instance.put(`/todos/${id}`, todoData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update todo');
  }
};

export const deleteTodo = async (id) => {
  try {
    await instance.delete(`/todos/${id}`);
  } catch (error) {
    throw new Error('Failed to delete todo');
  }
};

export default instance;
