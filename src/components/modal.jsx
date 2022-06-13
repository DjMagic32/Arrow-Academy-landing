import React from "react";
import styled from "styled-components";
import IconCloseImg from "../images/icons/xmark-solid.svg"
import FormApp from "./form";

const Modal = ({ children, state, setState }) => {
    return(
        <>
        {state &&
        <Overlay>
            <ModaLContainer>
                <HeaderModal>
                    <h3>Regístrate</h3>

                    <ButtonClose onClick={() => setState(!state)}>
                        <img src={IconCloseImg} />
                    </ButtonClose>
                </HeaderModal>
                
                    <FormApp />
               
            </ModaLContainer>
        </Overlay>
        }   
        </>
    );
};

const ModaLContainer = styled.div`
    width: 500px;
    min-height: 100px;
    background-color: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(0,0,0,0.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;


`;

const HeaderModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3 {
        font-weight: 500;
        font-size: 16px;
        color: #2e1a4d;
    }
`;


const ButtonClose =styled.button`
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: all 0.5s ease-in;
    color: #1766DC;

    &:hover {
        background-color: #E2F7D3;
        border-radius: 5px;
        
    }

    img {
        width: 100%;
        height: 100%;
    }
    
`;

const ModalContent =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;




export default Modal;