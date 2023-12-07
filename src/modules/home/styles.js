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

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  grid-template-rows: 1fr 1fr;
  gap: 4%;
  @media (max-width: 700px) {
    width: 80%;
    gap: 10px;
  }

  @media (max-width: 380px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 10px;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  width: 100%;
  min-height: 320px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;
