import styled from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';

const VignetteContainer = styled.li`
    width: 29.82%;
    height: 340px;
    position: relative;

`;

const TextElement = styled.p`
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 90%;
    font-size: 18px;
    color: white;
`;

const ImageElement = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

const OverlayElement = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    border-radius: 10px;
`;


function VignetteLocation({ id, title, cover }) {
    console.log(id)
    return (
        <VignetteContainer key={id} >
            <NavLink to={`/logement/${id}`}>
                <ImageElement src={cover} alt={`${title} cover`} />
                <OverlayElement></OverlayElement>
                <TextElement>{title}</TextElement>
            </NavLink>
        </VignetteContainer>
    );
}

export default VignetteLocation;
