import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

import { Input } from "../../components/Input";
import { UserContext } from "../../context/userContext";

import { api } from "../../services/api";

import {
  Container,
  WeekButtonContainer,
  ButtonsContainer,
  Button,
} from "./styles";
import { WeekButton } from "./WeekButton";

export const weekDays = [
  { id: 7, name: "D" },
  { id: 1, name: "S" },
  { id: 2, name: "T" },
  { id: 3, name: "Q" },
  { id: 4, name: "Q" },
  { id: 5, name: "S" },
  { id: 6, name: "S" },
];

export function CreateCard({ habit, setHabit, cancel, getHabits }) {
  const [selectedDays, setSelectedDays] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);

  const { userData } = useContext(UserContext);

  function handleCreateCard(e) {
    e.preventDefault();
    setIsLoading(true);
    if (habit !== "" && selectedDays.length > 0) {
      api
        .post(
          "/habits",
          {
            name: habit,
            days: selectedDays,
          },
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }          
        )
        .then(() => {
          setIsLoading(false);
          getHabits();
          setHabit('')
          cancel();
        })
        .catch(() => {
          alert("Erro ao cadastrar novo hábito, tente novamente mais tarde.");
          setIsLoading(false);
        });
    } else {
      alert("Erro ao cadastrar novo hábito, tente novamente mais tarde.");
      setIsLoading(false);
    }
  }

  function selectWeekButton(id) {
    if (selectedDays.includes(id)) {
      let arr = [...selectedDays];
      const index = arr.indexOf(id);
      if (index > -1) {
        arr.splice(index, 1);
        setSelectedDays([...arr]);
      }
    } else {
      setSelectedDays([...selectedDays, id]);
    }
  }

  return (
    <Container>
      <Input
        placeholder={"nome do hábito"}
        onChange={(e) => setHabit(e.target.value)}
        value={habit}
        disabled={isLoading}
        type={"text"}
      />
      <WeekButtonContainer>
        {weekDays.map((weekDay) => (
          <WeekButton
            key={weekDay.id}
            name={weekDay.name}
            selectButton={() => selectWeekButton(weekDay.id)}
            isSelected={selectedDays.includes(weekDay.id)}
            disabled={isLoading}
          />
        ))}
      </WeekButtonContainer>
      <ButtonsContainer>
        <Button color={"transparent"} onClick={cancel}>
          Cancelar
        </Button>

        <Button color={"#52b6ff"} onClick={handleCreateCard} type="submit">
          {isLoading ? (
            <ThreeDots
              height="40"
              width="40"
              radius="9"
              color="#FFFFFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            <>Salvar</>
          )}
        </Button>
      </ButtonsContainer>
    </Container>
  );
}
