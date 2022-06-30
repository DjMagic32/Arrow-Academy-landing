import React, { useState, useEffect }  from "react";
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import profileImg from "../images/icons/user-solid.svg"
import styled from "styled-components";
import axios from "axios";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
  ];
  
const SectionValorations = () =>{

    const url = "http://127.0.0.1:8000/api/v1"
    const request = "/comments"

    const [comments, setComments] = useState([])
    useEffect(()=> {
        axios.get(url + request).then(res => {
            setComments(res.data)
        }).catch(err => {
            console.log(err);
        });
    },[]);

    console.log(comments, "esto es coments")

    return(
        <>
            {/* <div className="controls-wrapper">
                <button onClick={removeItem}>Remove Item</button>
                <button onClick={addItem}>Add Item</button>
            </div> */}
            <Section>
                <Carousel breakPoints={breakPoints}>
                  {comments.map((item) => (
                    <Item 
                        key={item.id}
                        content={item.body}
                        author={item.author}
                        profileImg={profileImg}
                        authorDescription={item.title}

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