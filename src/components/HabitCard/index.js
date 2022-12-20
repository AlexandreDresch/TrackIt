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
    <Container data-test="habit-container">
      <Text data-test="habit-name">{text}</Text>

      <TrashButton onClick={onClick} data-test="habit-delete-btn">
        <TrashSharp />
      </TrashButton>

      <WeekButtonContainer>
        {weekDays.map((weekDay) => (
          <WeekButton
            key={weekDay.id}
            isSelected={selectedDays.includes(weekDay.id)}
            data-test="habit-day"
          >
            {weekDay.name}
          </WeekButton>
        ))}
      </WeekButtonContainer>
    </Container>
  );
}
