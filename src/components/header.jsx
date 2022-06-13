import React, { useState } from "react";
import BackgroundSlider from 'react-background-slider'
import styled from "styled-components";
import Modal from "./modal";
import image1 from "../images/carousel/1.jpg"
import image2 from "../images/carousel/2.jpg"

const HeaderApp = () => {

  const [isOpen, setIsOpen] = useState(false);


    return (
      <HeaderContainer>
        <TitleBanner>PRIMEROS PASOS CON PYTHON</TitleBanner>
        <ContainerContextHeader>
          
          <ButtonToAction onClick={() => setIsOpen(!isOpen)}>RESERVA TU LUGAR</ButtonToAction>
        </ContainerContextHeader>
        <BackgroundSlider
          images={[image1, image2, ]}
          duration={10} transition={2}
        />
        
        <Modal
          state={isOpen}
          setState={setIsOpen}

        />
        
      
      </HeaderContainer>
    );

};

const HeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: 600px;

`;

const TitleBanner = styled.h2`
  color: #fff;
  font-size: 41px;
  font-weight: bold;
  margin: 20px;
  
`;

const ButtonToAction = styled.button`
  margin: 0;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #2e1a4d;
  transition: all 0.4s ease-in;
  font-size: 0.9rem;
  border: none;
  padding: 5px 10px;
  padding-left: 5px;
  width: 200px;
  border-radius: 5px;
  text-align: center;
  background-color: #2e1a4d;
  color: #fff;

  &:hover {
      background-color: #5ec92b;
      color: #2e1a4d;
      
      
  }


`;
const ContainerContextHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;


export default HeaderApp;