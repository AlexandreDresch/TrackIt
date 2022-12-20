import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  background-color: #e5e5e5;
`;

export const TitleContainer = styled.div`
  padding: 0 17px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 22px 0;
`;

export const Title = styled.h1`
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 23px;
  color: #126ba5;
`;

export const Button = styled.button`
  width: 40px;
  height: 35px;
  background-color: #52b6ff;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-size: 27px;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  padding: 0 17px;
  min-height: 80vh;
`;

export const Text = styled.p`
  white-space: pre-wrap;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 18px;
  color: #666666;
`;
