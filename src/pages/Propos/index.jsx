import styled from 'styled-components';
import { React, useEffect } from 'react';
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
    @media (max-width: 375px) {
        margin-top: 0px;
        margin-bottom: 0px; 
        gap: 20px;

    }
`

const CollapseContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 24px;
    font-weight: 500;
    width: 82.5%;
    margin: auto;
    @media (max-width: 375px) {
        width: 100%;
        gap: 20px;
        font-size: 13px;
    }
`

function Propos() {
    useEffect(() => {
        document.title = `Kasa - À propos`
    }, [])
    return (
        <ProposContainer>
            <ImgTop
                src={Image}
                alt="iamge d'entête"
                text=''
            />
            <CollapseContainer>
                <Collapse
                    title='Fiabilité'
                    description={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}
                />
                <Collapse
                    title='Respect'
                    description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
                />
                <Collapse
                    title='Service'
                    description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
                />
                <Collapse
                    title='Sécurité'
                    description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </CollapseContainer>

        </ProposContainer>
    );
}

export default Propos;
