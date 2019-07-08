import React from "react";
import './style.css'


function Cards(props) {
    return (
        <div className="card">
            <div className="imgs">
                <img onClick={() => props.imageClicked(props.name)} name={props.name}alt={props.name} src={props.image} />
            </div>
        </div>
        
    );
}
 
export default Cards;