import { useContext } from "react";
import { TrashSharp } from "react-ionicons";
import { UserContext } from "../../context/userContext";
import { api } from "../../services/api";

import { weekDays } from "../CreateCard";

import {
  Container,
  Text,
  TrashButton,
  WeekButtonContainer,
  WeekButton,
} from "./styles";

export function HabitCard({ text, selectedDays, onClick }) { 

  return (
    <Container>
      <Text>{text}</Text>

      <TrashButton onClick={onClick}>
        <TrashSharp />
      </TrashButton>

      <WeekButtonContainer>
        {weekDays.map((weekDay) => (
          <WeekButton
            key={weekDay.id}
            isSelected={selectedDays.includes(weekDay.id)}
          >
            {weekDay.name}
          </WeekButton>
        ))}
      </WeekButtonContainer>
    </Container>
  );
}
