import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  video {
    height: 60vh;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
`;

export const Progress = styled.input`
  width: 100%;
  -webkit-appearance: none;
  /* estiliza o marcador móvel */
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  :hover::-webkit-slider-thumb {
    background: red;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }

  /* estiliza a a barra do slider */
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    background: #ff0000;
    cursor: pointer;
  }

  :hover::-webkit-slider-runnable-track {
    height: 5px;
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

  input[type="range"] {
    -webkit-appearance: none; /* remove estilo padrão do browser */
  }

  /* estiliza o marcador móvel */

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* remove estilo padrão do browser */
    background: #f1f1f1;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }

  /* estiliza a a barra do slider */
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    background: #0f0f0f;
  }
`;

export const Gear = styled.div`
  cursor: pointer;

  > select {
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
