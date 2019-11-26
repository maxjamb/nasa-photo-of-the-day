import React from "react";
import styled from 'styled-components';

export const StyleCard = styled.div`
width: 70vw;
margin: 1rem auto 2rem auto;
border: 1px solid #e8ebec;
padding: 3rem;
background-color: white;
display: flex;
flex-direction: column;
border-radius: 1rem;
img {
  width: 100%;
  height: 100%;
  margin-right: 1rem;
  transition: transform 0.8s ease-in-out;
  :hover {
    transform: rotate(360deg);
  }
`;

const StyledH1 = styled.h1`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  text-align: left;
  text-color: red;

`;

const Card = (props) => {

    return (
        <StyleCard>
            <StyledH1>{props.card.title}</StyledH1>
            <img src={props.card.hdurl} width="40%" alt='space'/>
            <h3>Date: {props.card.date}</h3>
            <p>{props.card.explanation}</p>
        </StyleCard>
    )
}

export default Card;