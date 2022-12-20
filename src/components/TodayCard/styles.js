import styled from "styled-components";

export const Container = styled.div`
  width: 340px;
  height: 94px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 13px;
  margin-bottom: 10px;
`;

export const TextContainer = styled.div``;

export const Title = styled.h1`
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 20px;
  color: #666666;
  margin-bottom: 7px;
`;

export const Image = styled.img`
  width: 35px;
  height: 28px;
`;

export const Text = styled.p`
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 13px;
  color: #666666;
`;

export const IconContainer = styled.div`
  width: 69px;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.setColor ? "#8FC549" : "#EBEBEB")};
  border-radius: 5px;
  cursor: pointer;
`;

export const InnerText = styled.span`
  color: ${(props) => (props.isGreen ? "#8FC549" : "#666666")};
`;
