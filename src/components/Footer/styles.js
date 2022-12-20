import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 70px;
  max-height: 70px;
  background-color: #ffffff;
  position: sticky;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 18px;
  color: #52b6ff;
  cursor: pointer;
`;
