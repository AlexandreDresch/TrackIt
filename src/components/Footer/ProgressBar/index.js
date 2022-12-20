import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

import { UserProgressContext } from "../../../context/userProgressContext";

import { Container } from "./styles";

export function ProgressBar() {
  const { percentage } = useContext(UserProgressContext);

  return (
    <Container data-test="today-link">
      <Link to={"/hoje"}>
        <CircularProgressbar
          value={percentage}
          text={`Hoje`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </Link>
    </Container>
  );
}
