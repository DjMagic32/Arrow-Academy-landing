import styled from "styled-components";
import quote_left from '../images/icons/quote-left-solid.svg'
import quote_right from '../images/icons/quote-right-solid.svg'


const Item = (props) => {
    return(
        <ContainerItem>
            <ReferenceContainer>
                <Reference ><Exclamationicon src={quote_left} />{props.content} <Exclamationicon src={quote_right} /></Reference>
            </ReferenceContainer>
        <AutorContainer>
            <ProfileImgContainer>
                <ProfileImg src={props.profileImg}/>
            </ProfileImgContainer>
            <AuthorContainerText>

                <AutorReference >{props.author}</AutorReference>
                <AuthorTextDescription>{props.authorDescription}</AuthorTextDescription>
                
            </AuthorContainerText>
            
        </AutorContainer>

        </ContainerItem>
    );


};


const AuthorTextDescription = styled.p`
    color: #d4cfcc;
    font-size: 10px;
`;

const AuthorContainerText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;

`;

const ProfileImgContainer = styled.div`
    border: 1px solid black;
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 20px 0px 0px;
    border-radius: 30px;
`;

const ProfileImg = styled.img`
    width: 20px;
    height: 20px;
`;

const Exclamationicon = styled.img`
    height: 17px;
    width: 17px;
`;

const AutorContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    padding: 0px 15px;
`;

const ReferenceContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding: 0px 15px;
`;

const AutorReference = styled.p`
    color: black;
    font-size: 10px;
    font-weight: bold;

`;

const Reference = styled.p`
    text-align: justify;
    font-size: 10px;
    color: black;

`;

const ContainerItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;
align-items: center;
height: 250px;
width: 100%;
color: #fff;
margin: 15px;
font-size: 4em;
border: 1px solid black;
background: #fff;
transition: all 0.2s ease 0s;
-webkit-transition: all 0.2s ease 0s;
-webkit-box-shadow: 0 1px 1px 0 rgb(0 0 0 / 12%);
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 12%);

&:hover {
        -webkit-box-shadow: 0 1rem 1rem rgb(31 45 61 / 13%) !important;
        box-shadow: 0 1rem 1rem rgb(31 45 61 / 13%) !important;
        -webkit-transform: translate(0, -5px);
        transform: translate(0, -5px);
    }
@media (max-width: 768px){
    height: auto;
    }
`;





export default Item;
