import styled from "styled-components";

export const Container = styled.form`
  width: 340px;
  height: 180px;
  background-color: #ffffff;
  padding: 18px;
  border-radius: 5px;
  margin-bottom: 29px;
`;

export const WeekButtonContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 23px;
  margin-top: 29px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 35px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 16px;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.color === "#52b6ff" ? "#FFFFFF" : "#52B6FF")};
`;
