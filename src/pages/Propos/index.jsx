import styled from 'styled-components';
import React from 'react';
import ImgTop from "../../components/ImgTop";
import Image from '../../assets/img-header-propos.png';
import Collapse from '../../components/Collapse';

const ProposContainer = styled.section`
    width: 86.2%;
    margin: auto;
    margin-top: 45px;
    margin-bottom: 50px; 
    display: flex;
    flex-direction: column;
    gap: 30px;
`

function Propos() {
    return (
        <ProposContainer>
            <ImgTop
                src={Image}
                alt="iamge d'entête"
                text=''
            />
            <Collapse
                width='82.5%'
                title='FIabilité'
                description={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}
            />
            <Collapse
                width='82.5%'
                title='Respect'
                description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
            />
            <Collapse
                width='82.5%'
                title='Service'
                description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
            />
            <Collapse
                width='82.5%'
                title='Sécurité'
                description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />

        </ProposContainer>
    );
}

export default Propos;
