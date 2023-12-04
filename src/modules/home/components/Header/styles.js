import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  padding: 40px 80px;
  justify-content: space-between;
`;

export const TitleAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.25;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Description = styled.span`
  margin: 0px;
  font-weight: 400;
  font-size: 0.928571rem;
  line-height: 1.75;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;
