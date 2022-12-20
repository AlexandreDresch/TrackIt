import styled from "styled-components";

export const Container = styled.div`
  width: 340px;
  padding: 15px;
  position: relative;
  background-color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Text = styled.h2`
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 20px;
  color: #666666;
  margin-bottom: 10px;
`;

export const TrashButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const WeekButtonContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const WeekButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.isSelected ? "#CFCFCF" : "#FFFFFF")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "#DBDBDB")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
