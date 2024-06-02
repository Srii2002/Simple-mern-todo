import React from 'react';
import { FormContainer, Input, Button } from './styles';

function Form({ inputTitle, setInputTitle, inputDescription, setInputDescription, addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(e);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        type='text'
        placeholder='Title'
      />
      <Input
        value={inputDescription}
        onChange={(e) => setInputDescription(e.target.value)}
        type='text'
        placeholder='Description'
      />
      <Button type="submit">ADD</Button>
    </FormContainer>
  );
}

export default Form;
