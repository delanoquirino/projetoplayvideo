import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: 1350px) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;

  a {
    text-decoration: none;
  }
`;

export const ListContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #0f0f0f;

  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  margin: 10px;
  height: 100px;
  cursor: pointer;
  gap: 10px;
  img {
    width: 200px;
    border-radius: 10px;
  }
  span,
  p {
    color: #888888;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  h3 {
    color: #f1f1f1;
  }
`;
