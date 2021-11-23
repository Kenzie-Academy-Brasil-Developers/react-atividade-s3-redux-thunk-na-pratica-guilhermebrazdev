import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  height: 500px;
  background-color: #7364f8;
  border-radius: 8px;
  border: 2px solid goldenrod;

  input {
    border-radius: 8px;
  }

  button {
    margin-top: 4px;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    :hover {
      transform: scale(1.02);
      transition: 0.5s;
    }
  }

  > div {
    display: flex;
    margin-top: 10px;
    background-color: #1760ac;
    align-items: center;
    color: whitesmoke;
    font-size: 30px;
    flex-direction: column;
    height: 480px;
    overflow-y: scroll;
    padding: 10px;
    border: 2px solid orange;
    border-radius: 8px;

    p {
      margin: 5px;
      border-radius: 8px;
      border: 1px solid black;
      background-color: #5e4162;
      text-align: center;
    }
  }
`;
