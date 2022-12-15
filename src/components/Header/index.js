import {
    Container,
    LogoImage,
    Image,
} from './styles';

import LogoText from '../../assets/logoText.svg';

export function Header() {
    return (
        <Container>
            <LogoImage src={LogoText}/>
            <Image src={'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg'}/>
        </Container>
    )
}