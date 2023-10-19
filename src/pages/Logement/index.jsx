import styled from 'styled-components';
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LocationList from '../../data/data.json';



function Logement() {
    const { idLogement } = useParams()
    console.log("IL", idLogement)
    const selectedLogement = LocationList.find((location) => location.id === idLogement);

    console.log("I", selectedLogement)

    if (!selectedLogement) {
        return <Navigate to="/error" />;
    }

    return (

        <div >
            {selectedLogement.title}
        </div>
    )
}

export default Logement