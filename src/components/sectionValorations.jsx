import React, { useState }  from "react";
//import styled from "styled-components";
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import copys from "./copys/copys";
import profileImg from "../images/icons/user-solid.svg"
import styled from "styled-components";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
  ];

const SectionValorations = () =>{

    const object = copys.cardValoration
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8,]);
    return(
        <>
            {/* <div className="controls-wrapper">
                <button onClick={removeItem}>Remove Item</button>
                <button onClick={addItem}>Add Item</button>
            </div> */}
            <Section>
                <Carousel breakPoints={breakPoints}>
                  {items.map((item) => (
                    <Item 
                        key={item}
                        content={object[item].valoration}
                        author={object[item].name}
                        profileImg={profileImg}
                        authorDescription="Python Developer"

                        />
                    ))} 
                </Carousel>
            </Section>
        </>
    );
};

const Section = styled.section`
    display: flex;
    width: 100%;
    height: 480px;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px 15px;

`;



export default SectionValorations;