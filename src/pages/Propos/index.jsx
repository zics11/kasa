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
    gap: 43px;
`

function Propos() {
    return (
        <ProposContainer>
            <ImgTop
                src={Image}
                alt="iamge d'entête"
                text=''
            />
            <Collapse/>
        </ProposContainer>
    );
}

export default Propos;
