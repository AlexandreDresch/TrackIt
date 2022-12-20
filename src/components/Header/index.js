import { useContext } from 'react';

import { UserContext } from '../../context/userContext';

import LogoText from '../../assets/logoText.svg';

import {
    Container,
    LogoImage,
    Image,
} from './styles';

export function Header() {
    const { userData } = useContext(UserContext);

    return (
        <Container data-test="header">
            <LogoImage src={LogoText}/>
            <Image src={userData.image}/>
        </Container>
    )
}