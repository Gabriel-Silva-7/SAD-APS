import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  gap: 10px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;
