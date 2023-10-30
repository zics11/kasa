import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const shouldForwardProp = (prop) => prop !== 'active';

const CarrousselContainer = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
    height: 415px;
    display: flex;
    align-items: center;
    @media (max-width: 375px) {
        height: 255px;
    }
`;

const SlideElement = styled.div.withConfig({ shouldForwardProp })`
    transition: opacity 0.5s;
    opacity: ${(props) => (props.active ? 1 : 0)};
    position: absolute;
    width: 100%;
    height: 100%;
`;

const ImageElement = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    @media (max-width: 375px) {
        border-radius: 10px;
    }
`;

const ButtonPrevElement = styled(FontAwesomeIcon)`
    position: absolute;
    left: 20px;
    height: 79px;
    color: white;
    cursor: grab;
    @media (max-width: 375px) {
        height: 24px;
        left: 6px;
    }
`;

const ButtonNextElement = styled(FontAwesomeIcon)`
    position: absolute;
    right: 20px;
    height: 79px;
    color: white;
    cursor: grab;
    @media (max-width: 375px) {
        height: 24px;
        right: 6px;
    }
`;

const CounterElement = styled.p`
    position: absolute;
    right: 50%;
    color: white;
    bottom: 25px;
    font-size: 18px;
    @media (max-width: 375px) {
        display: none;
    }
`;


function Carrousel({ pictures }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <CarrousselContainer >
            {pictures.map((image, index) => (
                <SlideElement key={index} active={index === activeIndex}>
                    <ImageElement src={image} alt={`Slide ${index}`} />
                </SlideElement>
            ))}

            {pictures.length > 1 && (
                <>
                    <ButtonPrevElement icon={faChevronLeft} onClick={prevSlide} />
                    <ButtonNextElement icon={faChevronRight} onClick={nextSlide} />
                    <CounterElement>{activeIndex + 1}/{pictures.length}</CounterElement>


                </>
            )}

        </CarrousselContainer>
    );
};

export default Carrousel;
