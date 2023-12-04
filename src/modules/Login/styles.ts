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

export const LoginWrapper = styled.div`
  background-color: #fff;
  min-width: 20%;
  max-width: 600px;
  padding: 20px;
  border-radius: 8px;
`;

export const LoginTitle = styled.h2`
  text-align: center;
  color: #333;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const RememberLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 4px;
`;

export const RememberLoginLabel = styled.label`
  margin-right: 10px;
`;

export const RememberLoginCheckbox = styled.input`
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #820000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e00000;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  margin-bottom: 10px;
`;
