import styled from 'styled-components';
import React from 'react';
import ImgTop from "../../components/ImgTop";
import Image from '../../assets/img-header.png';
import VignetteLocation from '../../components/VignetteLocation';
import LocationList from '../../data/data.json'

const HomeContainer = styled.section`
    width: 86.2%;
    margin: auto;
    margin-top: 45px;
    margin-bottom: 50px; 
    display: flex;
    flex-direction: column;
    gap: 43px;
`
const LocationsContainer = styled.section`
background-color: #F6F6F6;
border-radius: 25px;
padding: 50px;
list-style-type: none;
display: flex;
flex-wrap: wrap;
gap: 60px;`

function Home() {
  return (
    <HomeContainer>
      <ImgTop
        src={Image}
        alt="iamge d'entête"
        text='Chez vous, partout et ailleurs'
      />
      <LocationsContainer>
        {LocationList.map(({ id, cover, title }) => (
          <VignetteLocation
            cover={cover}
            title={title}
            id={id}
          />
        ))}

      </LocationsContainer>
    </HomeContainer>
  );
}

export default Home;
