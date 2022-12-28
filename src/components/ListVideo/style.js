import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Video = styled.div`
  height: 100vh;
  background: blue;
  width: 100%;
`;

export const Container = styled.div`
  height: 100vh;
  width: 700px;
  background-color: black;
  color: grey;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  margin: 10px;
  gap: 10px;
  height: 100px;
  img {
    display: block;
    width: 140px;
    border-radius: 10px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
