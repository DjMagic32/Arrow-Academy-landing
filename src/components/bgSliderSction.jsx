import React, { useState } from "react";
import styled from "styled-components";
import image1 from "../images/carousel/1.jpg"
import image2 from "../images/carousel/2.jpg"
import { keyframes } from 'styled-components'
import Modal from "./modal";

const BgSliderMain = () => {
  const [isOpen, setIsOpen] = useState(false);
    return(
        <BgSliderSection>
          <BgSliderContainer>
            <TitleBanner>PRIMEROS PASOS CON PYTHON</TitleBanner>

            <ButtonToAction onClick={() => setIsOpen(!isOpen)}>RESERVA TU LUGAR</ButtonToAction>
            <Modal
            state={isOpen}
            setState={setIsOpen}
            />
          
          </BgSliderContainer>
        </BgSliderSection>
    );

};

const breatheAnimation = keyframes`
 0% { background-image: url(${image1}) }
 25% { background-image: url(${image2}) }
 50% { background-image: url(${image1}) }
 75% { background-image: url(${image2}) }
 100% { background-image: url(${image1}) }
 `;


const BgSliderSection = styled.div`
    width: 100%;
    height: 80vh;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    backface-visibility: hidden;
    animation: ${breatheAnimation} 8s linear infinite 0s;
    animation-timing-function: ease-in-out;
    background-image: url(${image1});


`;

const BgSliderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
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

const TitleBanner = styled.h2`
  color: #fff;
  font-size: 41px;
  font-weight: bold;
  margin: 20px;
  text-align: center;
  
`;

export default BgSliderMain;