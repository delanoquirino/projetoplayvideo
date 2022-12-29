import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  height: 100vh;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const VideoWrapper = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;

  @media (max-width: 1350px) {
    width: 100%;
  }
`;

export const Progress = styled.input`
  width: 100%;
`;

export const Controls = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  div {
    display: flex;
    gap: 10px;
  }
`;

export const Actions = styled.div`
  > button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const Volume = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 20rem;

  input {
    visibility: hidden;
  }

  :hover {
    input {
      visibility: visible;
    }
  }
`;

export const Gear = styled.div`
  cursor: pointer;
  position: relative;

  :hover {
    div {
      visibility: visible;
    }
  }
`;
export const Speed = styled.div`
  visibility: hidden;
`;

export const FullScreen = styled.button`
  background-color: transparent;
  border: none;
`;

export const Info = styled.div`
  background-color: #0f0f0f;
  color: #f1f1f1;
  padding-left: 25px;
`;

export const Title = styled.div`
  margin: 10px;
`;

export const Description = styled.div`
  background: #222222;
  color: #f1f1f1;
  padding: 1px 10px;
  border-radius: 10px;
  margin: 10px;

  :hover {
    background: #3f3f3f;
  }
`;
