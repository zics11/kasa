import styled from 'styled-components';
import React from 'react';

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 223px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 375px) {
        height: 111px;
        margin-bottom: 0px;

    }
`;

const TextElement = styled.p`
    position: absolute;
    color: white;
    font-size: 48px;
    font-weight: 500;
    left: 0pX;
    width: 100%;
    height: 100%;
    line-height: 223px;
    text-align: center;
    @media (max-width: 375px) {
        line-height: 24px;
        font-size: 24px;
        text-align: left;
        width: 217px;
        height: 48px;
        left: 20pX;
    }

`;

const ImageElement = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    filter: brightness(0.7);
    object-fit: cover;
    @media (max-width: 375px) {
        border-radius: 10px;
    }
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
