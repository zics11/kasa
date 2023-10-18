import styled from 'styled-components';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseContainer = styled.div`
    position: relative;
    width: 100%;
    height: 223px;
`;

const Rotate = styled(FontAwesomeIcon)`
    transition: transform 0.3s; // Ajoutez une transition pour une animation fluide
    transform: rotate(${(props) => props.rotate || '0deg'}); // Utilisez la variable rotate pour définir la rotation
`;

function Collapse() {
    const [isOpen, setIsOpen] = useState(false);
    const [rotate, setRotate] = useState('0deg'); // Initialisez la variable de rotation

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
        setRotate(isOpen ? '0deg' : '180deg'); // Changez la rotation en fonction de l'état d'ouverture
    };

    return (
        <CollapseContainer>
            <h2 onClick={toggleCollapse}>
                Titre
                <Rotate icon={faChevronUp} rotate={rotate} />
            </h2>
            {isOpen && <p>description</p>}
        </CollapseContainer>
    );
}

export default Collapse;
