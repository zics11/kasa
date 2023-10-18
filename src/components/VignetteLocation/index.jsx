import styled from 'styled-components';
import React from 'react';

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
    filter: brightness(0.7);


`;

function VignetteLocation({ id, title, cover }) {
    return (
        <VignetteContainer key={id} >
            <ImageElement src={cover} alt={`${title} cover`} />
            <TextElement>{title}</TextElement>
        </VignetteContainer>
    );
}

export default VignetteLocation;
