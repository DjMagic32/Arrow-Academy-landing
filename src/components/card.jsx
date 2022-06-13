import React from "react";
import styled from "styled-components";

const CardApp = (props) => {
    return(
        <ContainerCard>
            <Card>
                <TitleCardContainer>
                    <TextTitle>{props.CardTitle}</TextTitle>
                </TitleCardContainer>

                <IconImg  src={props.src}/>
                
                <LinkCard></LinkCard>
            </Card>
        </ContainerCard>
    )
};

const IconImg = styled.img`
    width: 100px;
    height: 100px;
`;

const ContainerCard = styled.div`
    display: flex;
    height: auto;
    margin: 30px 10px;
`;

const Card = styled.div`
    width: 250px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    transition: all 0.2s ease 0s;
    -webkit-transition: all 0.2s ease 0s;
    -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%);
    border: none;
    border-top: 4px solid transparent;
    border-radius: 1rem;

    &:hover {
        -webkit-box-shadow: 0 1rem 3rem rgb(31 45 61 / 13%) !important;
        box-shadow: 0 1rem 3rem rgb(31 45 61 / 13%) !important;
        -webkit-transform: translate(0, -5px);
        transform: translate(0, -5px);
        border-top: 4px solid #783884;
    }


`;

const TitleCardContainer = styled.div`
    margin: 0;
    padding: 0;
    font: inherit;
    vertical-align: baseline;
`;

const TextTitle = styled.span`
    font-weight: bold;
    line-height: 1.25;
    color: #1b2e4b;
`;


const LinkCard = styled.a`
    border-radius: 10rem;
    /* cursor: pointer; */
    border-color: #9629e6;
    color: #9629e6;
    text-decoration: none;
    background-color: transparent;
    border: 1px solid transparent;
    vertical-align: middle;
    text-align: center;
    position: relative;
    font-family: "Montserrat", sans-serif;
    font-size: 0.838rem;
    font-weight: 500;
    padding: 0.55em 1.735em;
    line-height: 1.75em;
    -webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
`;

export default CardApp;