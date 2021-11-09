import { useState } from 'react';
import styled from 'styled-components';

const CardBody = styled.div`
  position: relative;
  border: 2px solid black;
  border-radius: 1rem;
  height: 20rem;
  width: 20rem;
  transition: transform 0.3s ease;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }
`;
const CardFront = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardBack = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlipCard = (props) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <CardBody className={flipped ? 'flipped' : ''} onClick={handleFlip}>
      <CardFront>{props.children[0]}</CardFront>
      <CardBack>{props.children[1]}</CardBack>
    </CardBody>
  );
};

export default FlipCard;
