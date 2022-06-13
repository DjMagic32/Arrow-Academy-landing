import styled from "styled-components";
import { Sling as Hamburger } from "hamburger-react"
import ArrowAcademyLogo from "../images/logo/logo_arrow_academy.png"
import { useState } from "react";

const NavbarLogo = () => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <NavbarApp>
            <LogoLink href="">
                <Logo src={ArrowAcademyLogo}/>
            </LogoLink>
        </NavbarApp>
    )
};

const NavbarApp = styled.nav`
    width: 100%;
    display: flex;
    padding: 0rem 2rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #e6e3ea;
    

`;

const LogoLink = styled.a``;

const Logo = styled.img`
    height: 60px;
    padding-top: 5px;
`;


export default NavbarLogo;