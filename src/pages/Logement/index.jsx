import styled from 'styled-components';
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LocationList from '../../data/data.json';
import Carrousel from '../../components/Carrousel';
import Star from '../../components/Star';
import Collapse from '../../components/Collapse';


const LogementContainer = styled.section`
    width: 86.2%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 375px) {
        gap: 15px;
    }
`

const Row = styled.section`
    display: flex;
    align-items: start;
    justify-content: space-between;
    color: #FF6060;
    font-size: 18px;
    gap:76px;
    @media (max-width: 375px) {
        flex-direction: column;
        gap: 16px;
        font-size: 13px;
    }
`

const Column1 = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 375px) {
        gap: 10px;
    }
`
const Column2 = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 375px) {
        width: 100%;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }


`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media (max-width: 375px) {
        font-size: 14px;
    }
`

const TitleElement = styled.h1`
    font-size: 36px;
    @media (max-width: 375px) {
        font-size: 18px;
    }
`

const Hostcontainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    text-align: right;
    justify-content: flex-end;
    @media (max-width: 375px) {
        font-size: 12px;
    }
`

const ImgElement = styled.img`
    border-radius: 32px;
    height: 64px;
    width: 64px;
    @media (max-width: 375px) {
        border-radius: 16px;
        height: 32px;
        width: 32px;
    }

`

const Tagscontainer = styled.div`
    display: flex;
    gap: 10px;
`

const TagsElement = styled.span`
    color: white;
    font-size: 14px;
    background-color: #FF6060;
    height: 25px;
    width: 115px;
    text-align: center;
    line-height: 25px;
    border-radius: 10px;
    @media (max-width: 375px) {
        border-radius: 7px;
        width: 84px;
        height: 18px;
        line-height: 18px;
        font-size: 10px;
    }
`




function Logement() {
    const { idLogement } = useParams()
    const selectedLogement = LocationList.find((location) => location.id === idLogement);



    if (!selectedLogement) {
        return <Navigate to="/error" />;
    }

    return (

        <LogementContainer >
            <Carrousel pictures={selectedLogement.pictures} />
            <Row>
                <Column1>
                    <TitleContainer>
                        <TitleElement>{selectedLogement.title}</TitleElement>
                        <span>{selectedLogement.location}</span>
                    </TitleContainer>
                    <Tagscontainer>
                        {selectedLogement.tags.map((tag, index) => (
                            <TagsElement key={index} >
                                {tag}
                            </TagsElement>
                        ))}
                    </Tagscontainer>

                </Column1>
                <Column2>
                    <Hostcontainer>
                        <div>
                            <span>{selectedLogement.host.name.split(' ')[0]}</span>
                            <br />
                            <span>{selectedLogement.host.name.split(' ')[1]}</span>
                        </div>
                        <ImgElement src={selectedLogement.host.picture} />
                    </Hostcontainer>
                    <Star rating={selectedLogement.rating} />
                </Column2>
            </Row>

            <Row>
                <Collapse
                    list={false}
                    title='Description'
                    description={selectedLogement.description}
                />
                <Collapse
                    list={true}
                    title='Équipements'
                    description={selectedLogement.equipments}
                />
            </Row>

        </LogementContainer>
    )
}

export default Logement