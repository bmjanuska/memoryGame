// MemBox 
// This creates an element for the clickable icon to live in 

import React from "react";
import "./MemBox.css";

const MemBox = (props) => (
    <div className="card">
        <img className="imgIcon"
            src={props.image}
        />
    </div>
);

export default MemBox;
