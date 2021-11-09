import { useState } from 'react';
import styled from 'styled-components';

const CardBody = styled.div`
  height: ${(props) => props.height || '20rem'};
  width: ${(props) => props.width || '20rem'};

  position: relative;
  border: 2px solid black;
  border-radius: 1rem;
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
  if (!props.children) {
    return null;
  }
  const { height, width } = props;

  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  const frontContent = Array.isArray(props.children)
    ? props.children[0]
    : props.children;
  const backContent = Array.isArray(props.children) ? props.children[1] : null;

  return (
    <CardBody
      height={height}
      width={width}
      className={flipped && 'flipped'}
      onClick={handleFlip}
    >
      <CardFront>{frontContent}</CardFront>
      <CardBack>{backContent}</CardBack>
    </CardBody>
  );
};

export default FlipCard;
