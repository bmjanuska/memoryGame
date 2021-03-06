// Header 
// The Head/ Hero image will be created here 

import React from "react";
import "./Header.css";

const Header = props => (
    <div className="headContent">
        <div className="container">
            <h1 className="display-4">Memory Game</h1>
            <p className="lead">Click on all an icon to get a point! Click the same icon and start back at zero! Can you reach twelve?</p>
        </div>
    </div>
);

export default Header;