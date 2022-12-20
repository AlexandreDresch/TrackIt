import styled from "styled-components";

export const Container = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.setColor ? "#CFCFCF" : "#FFFFFF")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => (props.setColor ? "#FFFFFF" : "#DBDBDB")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;