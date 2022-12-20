import { Container } from "./styles";

export function WeekButton({ name, isSelected, selectButton, disabled }) {
  return (
    <Container
      setColor={isSelected}
      onClick={selectButton}
      disabled={disabled}
      type="button"
      data-test="habit-day"
    >
      {name}
    </Container>
  );
}
