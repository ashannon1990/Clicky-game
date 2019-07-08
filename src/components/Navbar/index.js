import React from "react";
import './style.css'

function Navbar(props) {
    return (
        <nav className="navbar">
            <span className="navbar-text">
                <ul className="navbar-nav">
                    <li className="nav-item">Clicky Game</li>

                    <li className="scores nav-item">
                        {props.children}
                    </li>
                </ul>
            </span>

        </nav>
    )
}

export default Navbar;