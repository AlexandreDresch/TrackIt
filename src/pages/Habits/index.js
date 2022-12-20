import { useContext, useEffect, useState } from "react";
import { CreateCard } from "../../components/CreateCard";

import { Footer } from "../../components/Footer";
import { HabitCard } from "../../components/HabitCard";
import { Header } from "../../components/Header";
import { UserContext } from "../../context/userContext";
import { api } from "../../services/api";

import {
  Container,
  TitleContainer,
  Title,
  Button,
  ContentContainer,
  Text,
} from "./styles";

export function Habits() {
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState("");
  const [openCreateCard, setOpenCreateCard] = useState(false);

  const { userData } = useContext(UserContext);

  function handleOpenCreateCard() {
    setOpenCreateCard(true);
  }

  function handleCloseCreateCard() {
    setOpenCreateCard(false);
  }

  function handleDeleteHabit(id) {
    if (window.confirm("Are you sure you want to delete this habit?")) {
      api.delete(`/habits/${id}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(() => {getHabits()});
    }
  }

  function getHabits() {
    api
      .get("/habits", {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        setHabits(res.data);
      });
  }

  useEffect(() => {
    getHabits();
  }, []);

  console.log(habits);
  return (
    <Container>
      <Header />
      <TitleContainer>
        <Title>Meus hábitos</Title>

        <Button onClick={handleOpenCreateCard}  data-test="habit-create-btn">+</Button>
      </TitleContainer>

      <ContentContainer>
        {openCreateCard && (
          <CreateCard
            cancel={handleCloseCreateCard}
            getHabits={getHabits}
            habit={habit}
            setHabit={setHabit}
          />
        )}

        {habits.length === 0 && (
          <Text>
            Você não tem nenhum hábito {"\n"}
            cadastrado ainda. Adicione um hábito {"\n"}
            para começar a trackear!
          </Text>
        )}

        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            text={habit.name}
            selectedDays={habit.days}
            onClick={() => handleDeleteHabit(habit.id)}
          />
        ))}
      </ContentContainer>

      <Footer />
    </Container>
  );
}
