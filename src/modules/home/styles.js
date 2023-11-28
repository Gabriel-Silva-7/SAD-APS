import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 54%;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  gap: 50px;
  margin-top: 20px;
  padding: 20px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  grid-template-rows: 1fr 1fr;
  gap: 4%;
`;

export const ChartContainer = styled.div`
  display: flex;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  width: 100%;
`;
