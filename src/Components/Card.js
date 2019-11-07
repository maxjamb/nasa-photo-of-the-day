import React from "react";


const Card = (props) => {

    return (
        <div>
            <h1>{props.card.title}</h1>
            <img src={props.card.hdurl} width="40%" alt='space'/>
            <h3>Date: {props.card.date}</h3>
        </div>
    )
}

export default Card;