import styled from 'styled-components';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseContainer = styled.div`
    width: ${(props) => props.width || '100%'};
    margin: auto;

`;

const TitleElement = styled.div`
    background-color: #FF6060;
    border-radius: 5px;
    padding: 10px;
    font-size: 24px;
    color: white;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const DescriptionElement = styled.div`
    background-color: #F6F6F6;
    color: #FF6060;
    border-radius: 5px;
    padding: 15px 10px 10px 10px;
    margin-top: -5px;
    font-size: 18px;
    font-weight: 400;

`;

const Rotate = styled(FontAwesomeIcon)`
    transition: transform 0.3s; 
    transform: rotate(${(props) => props.rotate || '0deg'});
    padding-top: 0px;
`;

function Collapse({ width, title, description }) {
    const [isOpen, setIsOpen] = useState(false);
    const [rotate, setRotate] = useState('0deg'); // Initialisez la variable de rotation

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
        setRotate(isOpen ? '0deg' : '180deg'); // Changez la rotation en fonction de l'état d'ouverture
    };

    return (
        <CollapseContainer width={width} >
            <TitleElement onClick={toggleCollapse}>
                {title}
                <Rotate icon={faChevronUp} rotate={rotate} />
            </TitleElement>
            {isOpen && (
                <DescriptionElement>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </DescriptionElement>
            )}
        </CollapseContainer>
    );
}

export default Collapse;
