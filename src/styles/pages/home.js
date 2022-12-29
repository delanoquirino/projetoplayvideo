import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

  @media (max-width: 1224px) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 70%;
  width: max-content;
  a {
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;

    margin-left: 2rem;
  }
`;

export const Filter = styled.div``;

export const Box = styled.div`
  display: flex;
  margin: 5px;
  cursor: pointer;
  gap: 10px;
  img {
    width: 160px;
    border-radius: 10px;
  }
  span,
  p {
    color: #888888;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  h3 {
    color: #f1f1f1;
  }
`;
