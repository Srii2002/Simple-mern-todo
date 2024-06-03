import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #ffbf00 0%, #ff7e5f 100%); /* Updated background gradient */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #333;
  transition: all 0.3s ease-in-out;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px rgba(72, 187, 120, 0.5);
  }
`;

export const TodoSection = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 10px;
  transition: background-color 0.3s, transform 0.2s;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Set width to 100% */
  height: 100%; /* Set height to 100% */
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextArea = styled.textarea`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const AddButton = styled(Button)`
  background-color: #ff5722;

  &:hover {
    background-color: #e64a19;
  }
`;
