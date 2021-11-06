import React from "react";

import styled from "styled-components";

import Fade from 'react-reveal/Fade';


function Section({title,description,backImg,leftBtnTxt,RightBtnTxt,name}) {

    return (

   

            <Wrap className="item" bgImage={backImg}>

                <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
                </Fade>
                

                <Buttons>
                <Fade bottom>
                <ButtonGroup>
                    <LeftButton>{leftBtnTxt}</LeftButton>

                    {RightBtnTxt&& 

                      <RightButton>{RightBtnTxt}</RightButton>
                    }
                   

                </ButtonGroup>

                </Fade>
                

                <DownArray src="/images/down-arrow.svg"></DownArray>
                </Buttons>

            </Wrap>

    )
}


export default Section

const Wrap = styled.div`

    background:black;
    width:100vw;
    height:100vh;
    background-image: ${props=>`url("/images/${props.bgImage}")`} ;
    background-size:cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

   
    background-repeat: no-repeat;


`

const ItemText = styled.div`


text-align: center!important;
padding-top: 15vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`

const Buttons = styled.div`

 
display: flex;
flex-direction: column;
align-items: center;


`

const ButtonGroup = styled.div`

text-align: center!important;

display:flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
@media (max-width:768px) {
    flex-direction: column;
    
  }



`

const LeftButton = styled.div`
background-color:rgba(23, 26, 32, 0.8) ;
height:40px;
width:256px;
color:white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
font-size: 12px;
cursor: pointer;
margin:8px;


`

const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;


`

const DownArray = styled.img`
height: 40px;

animation: animateDown  infinite 1.5s ;
overflow-x: hidden;



`

