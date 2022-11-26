import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

import first from "../../assets/Images/first.jpeg";
import second from "../../assets/Images/second.jpeg";
import third from "../../assets/Images//third.jpeg";
import forth from "../../assets/Images/forth.jpeg";

const images = [first, second, third, forth];

const forwardImageAnimation = keyframes`
  0%{
    right: -50%;
  }
  100%{
    right: 0%;
  }
`;

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  const preImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <Container>
      {currentImageIndex !== 0 && (
        <StyledArrowContainer onClick={preImage} leftPosition="10%">
          <BsArrowLeftShort color="white" />
        </StyledArrowContainer>
      )}

      <StyledImageContainer>
        <StyledImage src={images[currentImageIndex]} />
      </StyledImageContainer>

      {currentImageIndex !== images.length - 1 && (
        <StyledArrowContainer onClick={nextImage} leftPosition="90%">
          <BsArrowRightShort color="white" />
        </StyledArrowContainer>
      )}
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  border: 1px solid black;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const StyledImageContainer = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  right: 0;
  animation: ${forwardImageAnimation} 2s ease;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledArrowContainer = styled.div`
  font-size: 45px;
  width: 50px;
  height: 50px;
  background: #d06aff;
  background: -webkit-linear-gradient(317deg, #d06aff 0%, #7052ff 100%);
  background: linear-gradient(317deg, #d06aff 0%, #7052ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  left: ${(props) => props.leftPosition};
  position: absolute;
  cursor: pointer;
`;
