import styled from "styled-components";
import Footer from "./components/footer.jsx";
import CardApp from "./components/card.jsx";
import Collapse from "./components/collapse.jsx";
import copys from "./components/copys/copys.js";
import image1 from "./images/carousel/1.jpg"
import NavbarLogo from "./components/navbarOnlyLogo.jsx";
import SectionValorations from "./components/sectionValorations.jsx";
import BgSliderMain from "./components/bgSliderSction.jsx";


function App() {

  return (
    <ContainerApp 
      className="App"
    >
      <NavbarLogo />
      <BgSliderMain/>
      
      <SectionCard>
      <TextCardSection>
          <h2>EMPIEZA YA CON ACADEMIA ARROW</h2>
          <p>¡Es muy fácil comenzar!</p>
      </TextCardSection>

        <CardDiv>
          <CardApp CardTitle={copys.card_title1} src={copys.iconCard_1} />
          <CardApp CardTitle={copys.card_title2} src={copys.iconCard_2}/>
          <CardApp CardTitle={copys.card_title3} src={copys.iconCard_3}/>
        </CardDiv>
        <CardDiv>
          <CardApp CardTitle={copys.card_title4} src={copys.iconCard_4}/>
          <CardApp CardTitle={copys.card_title5} src={copys.iconCard_5}/>
          <CardApp CardTitle={copys.card_title6} src={copys.iconCard_6}/>
        </CardDiv>

      </SectionCard>

      <SectionCollapses>
        <h4>¿QUE APRENDERAS EN EL CURSO?</h4><br/>
        <Collapse clase={copys.clase1} content={copys.content_clas1}/>
        <Collapse clase={copys.clase2} content={copys.content_clas2}/>
        <Collapse clase={copys.clase3} content={copys.content_clas3}/>
        <Collapse clase={copys.clase4} content={copys.content_clas4}/>
      </SectionCollapses>

      <SectionValorations />
      <Footer />

      
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;

`;
const SectionCard = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 40px 10px;

`;

const TextCardSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  color: #2e1a4d;
  font-weight: bold;
  font-size: 18px;
  padding: 0;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

`;

const SectionCollapses = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 490px;
  flex-direction: column;
  text-align: center;
  background-image: url(${image1});
  background-size: cover;
  /* background-color: #0e0023; */

  h4 {
    color: #fff;
  }
`;
const SectionHeader = styled.section`
  width: 100%;
  height: 880px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0;

  @media (max-width: 735px) {
    height: 700px;
    
  }
`;

export default App;
