import Checkmark from "../../assets/checkmark.png";

import {
  Container,
  TextContainer,
  Title,
  Text,
  IconContainer,
  Image,
  InnerText,
} from "./styles";

export function TodayCard({
  title,
  done,
  currentSequence,
  highestSequence,
  onClick,
  totalHabits,
}) {
  return (
    <Container data-test="today-habit-container">
      <TextContainer>
        <Title data-test="today-habit-name">{title}</Title>

        <Text data-test="today-habit-sequence">
          Sequência atual:{" "}
          <InnerText isGreen={done}>{currentSequence} dias</InnerText>
        </Text>

        <Text data-test="today-habit-record">
          Seu recorde:{" "}
          <InnerText
            isGreen={highestSequence > 0 && highestSequence === currentSequence}
          >
            {highestSequence} dias
          </InnerText>
        </Text>
      </TextContainer>

      <IconContainer
        setColor={done}
        onClick={onClick}
        data-test="today-habit-check-btn"
      >
        <Image src={Checkmark} />
      </IconContainer>
    </Container>
  );
}
