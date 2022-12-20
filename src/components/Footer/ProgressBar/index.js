import { useContext } from "react";
import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";  
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { UserProgressContext } from "../../../context/userProgressContext";

import { Container } from './styles';

export function ProgressBar() {
  const {progressData} = useContext(UserProgressContext)

  return (
    <Container>
      <Link to={'/hoje'}>
      <CircularProgressbar
        value={progressData}
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
