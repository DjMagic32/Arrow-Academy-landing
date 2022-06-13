import React from "react";
import styled from "styled-components";
import InstagramIcon from "../images/icons-red-social/instagram-brands.svg"
import WhatsappIcon from "../images/icons-red-social/whatsapp-brands.svg"


const Footer = () => {

    return(
    
    <FooterApp>
        <ContainerFooter>
            <p>Copyright © 2022 Arrow Academy</p>

        </ContainerFooter>
        <ContainerIconFooter>
            <IconsSocials src={InstagramIcon} alt="" />
            <IconsSocials src={WhatsappIcon} alt="" />
            

        </ContainerIconFooter>

    </FooterApp>
    );


};

const FooterApp = styled.footer`
    width: 100%;
    height: 150px;
    background-color: #e6e3ea;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`;

const ContainerFooter = styled.div``;

const ContainerIconFooter = styled.div``;

const IconsSocials = styled.img`
    margin: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export default Footer;
