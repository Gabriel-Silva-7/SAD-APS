import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  padding: 40px 80px;
  justify-content: space-between;

  @media (max-width: 700px) {
    padding: 5px 10px;
    flex-direction: column;
  }
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
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const Description = styled.span`
  margin: 0px;
  font-weight: 400;
  font-size: 0.928571rem;
  line-height: 1.75;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  @media (max-width: 700px) {
    font-size: 0.75rem;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;
