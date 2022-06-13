import styled from "styled-components";
import { Sling as Hamburger } from "hamburger-react"
import ArrowAcademyLogo from "../images/logo/logo_arrow_academy.png"
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <NavbarApp>
            <LogoLink href="">
                <Logo src={ArrowAcademyLogo}/>
            </LogoLink>
            <HamburgerDiv className="HamburNav" onClick={() => setIsOpen(!isOpen)}>
                <Hamburger />
            </HamburgerDiv>
            <Menu isOpen={isOpen}>
                <MenuLink href="">Home</MenuLink>
                <MenuLink href="">Link</MenuLink>
            </Menu>
        
        </NavbarApp>
    )
};

const NavbarApp = styled.nav`
    width: 100%;
    display: flex;
    padding: 0rem 2rem;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #e6e3ea;
    

`; 

const HamburgerDiv =  styled.div``;

const LogoLink = styled.a``;

const Logo = styled.img`
    height: 60px;
    padding-top: 5px;
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    position: relative;

    @media (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        transition: all 0.5s ease-in;
        max-height: ${({isOpen}) => (isOpen ? "300px":"0px")};
    }
`;

const MenuLink = styled.a`
    margin: 10px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #2e1a4d;
    padding: 5px 10px;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;

    &:hover {
        background-color: #5ec92b;
        color: #2e1a4d;
        border-radius: 50px;
        
    }


`;


export default Navbar;