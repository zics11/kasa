import styled from 'styled-components';
import {React, useEffect} from 'react';
import { NavLink } from 'react-router-dom';


const ErrorContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 800px;
    justify-content: space-around;
    color: #FF6060;
    @media (max-width: 375px) {
        height: 580px;
        justify-content: space-evenly;

    }

`;

const TitleElement = styled.h1`
    font-weight: 700;
    font-size: 288px;
    @media (max-width: 375px) {
        font-size: 96px;
    }
`;

const DescriptionElement = styled.h1`
    font-weight: 500;
    font-size: 36px;
    @media (max-width: 375px) {
        font-size: 18px;
        text-align: center;
        width: 260px;
    }

`;

const NavLinkStyled = styled(NavLink)`
    font-weight: 500;
    font-size: 18px;
    text-decoration: underline;
    @media (max-width: 375px) {
        font-size: 14px;

    }
`;

function Error() {
    useEffect(() => {
        document.title = `Kasa - 404, la page que vous demandez n'existe pas`
      }, [])
    
    return (
        <ErrorContainer>
            <TitleElement>404</TitleElement>
            <DescriptionElement>Oups! La page que vous demandez n'existe pas.</DescriptionElement>
            <NavLinkStyled to="/" >Retourner sur la page d’accueil</NavLinkStyled>
        </ErrorContainer>
    )
}

export default Error