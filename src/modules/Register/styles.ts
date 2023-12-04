import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgb(247, 249, 252);
`;

export const Logo = styled.img`
  width: 150px;
  height: 100px;
  margin-bottom: 30px;
`;

export const RegisterWrapper = styled.div`
  background-color: #fff;
  min-width: 25%;
  max-width: 600px;
  padding: 20px;
  border-radius: 8px;
`;

export const RegisterTitle = styled.h2`
  text-align: center;
  color: #333;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorMsg = styled.p`
  color: red;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
