import styled from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';


const ErrorContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 800px;
    justify-content: space-around;
    color: #FF6060;
`;

const TitleElement = styled.h1`
    font-weight: 700;
    font-size: 288px;
`;

const DescriptionElement = styled.h1`
    font-weight: 500;
    font-size: 36px;
`;

const NavLinkStyled = styled(NavLink)`
    font-weight: 500;
    font-size: 18px;
    text-decoration: underline;
`;

function Error() {
    return (
        <ErrorContainer>
            <TitleElement>404</TitleElement>
            <DescriptionElement>Oups! La page que vous demandez n'existe pas.</DescriptionElement>
            <NavLinkStyled to="/" >Retourner sur la page d’accueil</NavLinkStyled>
        </ErrorContainer>
    )
}

export default Error