import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  min-height: 150px;
  justify-content: center;
`;

export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  width: 85%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalClients = styled.div`
  font-size: 24px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  display: flex;
  align-items: center;
`;

export const Date = styled.div`
  padding: 5px;
  background-color: rgb(71, 130, 218);
  border-radius: 8px;
  font-size: 12px;
  color: white;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
`;

export const Percents = styled.div`
  color: rgb(76, 175, 80);
  font-weight: 600;
  background: rgba(76, 175, 80, 0.1);
  padding: 3px;
  border-radius: 8px;
  font-size: 12px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
`;

export const PercentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(71, 130, 218);
`;

export const LastUpdate = styled.div`
  font-size: 14px;
`;
