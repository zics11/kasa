import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarContainer = styled.div`
  color: #E3E3E3;
  font-size: 24px;
  display: flex;
  gap: 10px;
  @media (max-width: 375px) {
    font-size: 13px;
    gap: 5px;
  }
`;

const RedStar = styled(FontAwesomeIcon)`
  color: #FF6060;
`;

function Star({ rating }) {
  const starIcons = [];
  for (let i = 0; i < 5; i++) {
    const starIcon = i < rating ? (
      <RedStar key={i} icon={faStar} />
    ) : (
      <FontAwesomeIcon key={i} icon={faStar} />
    );
    starIcons.push(starIcon);
  }

  return <StarContainer>{starIcons}</StarContainer>;
}

export default Star;
