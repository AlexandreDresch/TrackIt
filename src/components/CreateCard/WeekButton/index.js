import { Container } from './styles';

export function WeekButton({name, isSelected, selectButton}) {
    return (
        <Container setColor={isSelected} onClick={selectButton} type='button' data-test="habit-day">
            {name}
        </Container>
    )
}

