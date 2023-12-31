import styled from 'styled-components';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseContainer = styled.div`
    width: 100%;
    `;

const TitleElement = styled.div`
    background-color: #FF6060;
    border-radius: 5px;
    height: 52px;
    padding: 0px 10px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 375px) {
        height: 30px;
    }
`;

const DescriptionElement = styled.div`
    background-color: #F6F6F6;
    color: #FF6060;
    border-radius: 5px;
    padding: 25px 20px 20px 20px;
    margin-top: -5px;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media (max-width: 375px) {
        font-size: 12px;
    }
`;


const Rotate = styled(FontAwesomeIcon)`
    transition: transform 0.3s; 
    transform: rotate(${(props) => props.rotate || '0deg'});
    padding-top: 0px;
    font-size: 16px;
`;

function Collapse({ title, description, list }) {
    const [isOpen, setIsOpen] = useState(false);
    const [rotate, setRotate] = useState('0deg'); // Initialisez la variable de rotation

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
        setRotate(isOpen ? '0deg' : '180deg'); // Changez la rotation en fonction de l'état d'ouverture
    };

    return (
        <CollapseContainer >
            <TitleElement onClick={toggleCollapse}>
                {title}
                <Rotate icon={faChevronUp} rotate={rotate} />
            </TitleElement>
            {isOpen && (
                <DescriptionElement>
                    {list ? (
                        description.map((item, index) => (
                            <p key={index}>
                                {item}
                            </p>
                        ))
                    ) : (
                        <p>{description}</p>
                    )}
                </DescriptionElement>
            )}
        </CollapseContainer>
    );
}

export default Collapse;
