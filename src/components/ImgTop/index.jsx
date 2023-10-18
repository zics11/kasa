import styled from 'styled-components';
import React from 'react';

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 223px;
`;

const TextElement = styled.p`
    position: absolute;
    color: white;
    font-size: 48px;
    font-weight: 500;
    left: 0pX;
    top : 0px;
    width: 100%;
    height: 100%;
    line-height: 223px;
    text-align: center;
    


`;

const ImageElement = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    filter: brightness(0.7);
    object-fit: cover;

`;

function ImgTop({ src, alt, text }) {
    return (
        <ImageContainer>
            <ImageElement src={src} alt={alt} />
            <TextElement>{text}</TextElement>
        </ImageContainer>
    );
}

export default ImgTop;
