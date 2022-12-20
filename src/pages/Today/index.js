import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import "dayjs/locale/pt-br";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TodayCard } from "../../components/TodayCard";

import { UserContext } from "../../context/userContext";

import { api } from "../../services/api";

import {
  Container,
  DateContainer,
  Date,
  Text,
  ContentContainer,
} from "./styles";
import { UserProgressContext } from "../../context/userProgressContext";

export function Today() {
  const [todayHabits, setTodayHabits] = useState([]);
  const [todayHabitsDone, setTodayHabitsDone] = useState(0);

  const { userData } = useContext(UserContext);
  const { doneHabits, setDoneHabits, percentage, setPercentage } =
    useContext(UserProgressContext);

  function getTodayDate() {
    dayjs.extend(weekday);
    const date = dayjs().locale("pt-br").format("dddd D/MM");

    return formatDay(date);
  }

  function formatDay(rawDate) {
    const day = rawDate.slice(rawDate.indexOf(" "));
    let weekday = rawDate.slice(0, rawDate.indexOf(" "));
    if (rawDate.indexOf("-") !== -1) {
      weekday = rawDate.slice(0, rawDate.indexOf("-"));
    }
    return `${weekday.replace(rawDate[0], rawDate[0].toUpperCase())},${day}`;
  }

  function getTodayHabitsList() {
    api
      .get("/habits/today", {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        setTodayHabits(res.data);

        let list = res.data;
        let doneList = [];

        for (let i = 0; i < list.length; i++) {
          if (list[i].done === true) {
            doneList.push(list[i].id);
          }
        }

        setDoneHabits(doneList);
        setPercentage(Math.round((doneList.length / list.length) * 100));
      });
  }

  function checkHabit(id) {
    api
      .post(
        `/habits/${id}/check`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      )
      .then(() => {
        getTodayHabitsList();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function uncheckHabit(id) {
    api
      .post(
        `/habits/${id}/uncheck`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      )
      .then(() => {
        getTodayHabitsList();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getTodayHabitsList();
  }, []);

  return (
    <Container>
      <Header />

      <ContentContainer>
        <DateContainer>
          <Date data-test="today">{getTodayDate()}</Date>

          {doneHabits.length === 0 ? (
            <Text data-test="today-counter">Nenhum hábito concluído ainda</Text>
          ) : (
            <Text data-test="today-counter">
              {percentage}% dos hábitos concluídos
            </Text>
          )}
        </DateContainer>

        {todayHabits.length > 0 &&
          todayHabits.map((habit) => (
            <TodayCard
              key={habit.id}
              title={habit.name}
              done={habit.done}
              currentSequence={habit.currentSequence}
              highestSequence={habit.highestSequence}
              onClick={
                habit.done === true
                  ? () => uncheckHabit(habit.id)
                  : () => checkHabit(habit.id)
              }
              totalHabits={todayHabits.length}
              doneHabits={doneHabits.length}
            />
          ))}
      </ContentContainer>
      <Footer />
    </Container>
  );
}
