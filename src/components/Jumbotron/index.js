import React from "react";
import './style.css'

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Pick all available pictures without choosing the same one twice</h1>
            </div>
        </div>
    )
}

export default Jumbotron;