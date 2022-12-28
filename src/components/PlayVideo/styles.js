import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0f0f0f;

  video {
    width: 100%;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  background-color: #000000;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
`;

export const Progress = styled.input`
  width: 100%;
  ::-webkit-slider-thumb {
    -webkit-appearance: none; /* remove estilo padrão do browser */
    background: red;
    height: 10px;
    width: 10px;
  }
  /* Firefox */
  ::-moz-range-thumb {
    background: red;
    height: 15px;
    width: 10px;
  }
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
  > input {
    visibility: hidden;
    transition: width 0.2s;
  }
  :hover {
    > input {
      visibility: visible;
    }
  }
`;
export const Gear = styled.div`
  cursor: pointer;
  > select {
    position: relative;
    display: none;
  }
  :hover {
    select {
      display: block;
    }
  }
`;

export const FullScreen = styled.button`
  background-color: transparent;
  border: none;
`;

export const Info = styled.div`
  background-color: #0f0f0f;
  color: #f1f1f1;
`;

export const Title = styled.div`
  margin: 10px;
`;

export const Description = styled.div`
  background: #3f3f3f;
  color: #f1f1f1;
  padding: 1px 10px;
  border-radius: 10px;
  margin: 10px;
`;
