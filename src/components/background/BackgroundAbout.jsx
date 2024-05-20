import React from 'react';
import styled from 'styled-components';
import COFFEE_IMAGE from "../../assets/coffe.jpg";

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url(${COFFEE_IMAGE});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: start;
  color: #321313;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${COFFEE_IMAGE});
  background-size: cover;
  background-position: center;
  filter: blur(10px); /* Adjust blur level here */
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5); /* Adjust opacity here */
  z-index: 2;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 3;
`;

const BackgroundAbout = ({ children }) => {
  return (
    <BackgroundContainer>
      <Blur />
      <Overlay />
      <ContentContainer>
        {children}
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default BackgroundAbout;
