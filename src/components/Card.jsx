import React from "react";

function Card(props){
    return(
    <div className="pics">
        <img src={props.img} alt="jet_ranger" />
        <div className="content">
        <h3>{props.name}</h3>
        <p>Air corner</p>
        </div>

    </div>
    )
}
export default Card;