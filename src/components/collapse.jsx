import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Pivot as ButtonCollapseHamburguer } from "hamburger-react"
import checkIcon from "../images/icons/Icon Line_10.svg"




const Collapse = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        

        <Collapsible>
            <HamburguerContainer className="HamburCollapse" onClick={() => setIsOpen(!isOpen)}>
                <span>{props.clase}</span>
                <ButtonCollapseHamburguer />
            </HamburguerContainer>
            <ContentCollapse isOpen={isOpen}>
                <Context>
                    <li> <Icon src={checkIcon} /> {props.content[1]}</li>
                    <li> <Icon src={checkIcon} /> {props.content[2]}</li>
                    <li> <Icon src={checkIcon} />{props.content[3]}</li>
                    <li> <Icon src={checkIcon} />{props.content[4]}</li>

                </Context>
                

            </ContentCollapse>
        </Collapsible>
    );


};


const Icon = styled.img`
    width: 13px;
    height: 13px;
    background-color: #9e91ac;
`;

const Collapsible = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 10px;
`;
const HamburguerContainer = styled.div`
    width: 60%;
    border: none;
    background-color: #9e91ac;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 7px;
    align-items: center;
    padding: 0px 10px;

`;
const ContentCollapse = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    position: relative;
    transition: all 0.5s ease-in;
    width: 60%;
    overflow: hidden;
    height: ${({isOpen}) => (isOpen ? "129px":"0px")};
    margin: 0px;

    @media (max-width: 768px){
        display: flex;
        overflow: hidden; 
        flex-direction: column;
        width: 60%;
        transition: all 0.5s ease-in;
        max-height: ${({isOpen}) => (isOpen ? "140px":"0px")};
        
    }
`; 
const Context = styled.ul`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-content: center;
    text-align: start;
    color: #2e1a4d;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 5px;
    border-top: none;
    height: 135px;
    width: 100%;
    padding: 20px 10px 15px 10px; 
    background-color: #fff;
    
`;
export default Collapse;