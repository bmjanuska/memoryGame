// MemContainer
// This holds all of the icons

import React from "react";
import MemBox from "../MemBox";
import "./MemContainer.css";

const MemContainer = (props) => (
    <div className="container">
        {props.list.map((item,i) => {
            return (
                <MemBox 
                //KEY IS REQUIRED. React can get confused without unique ids
                    key={item.id}
                    image={item.image}
                />
            )
        })}
    </div>
);

export default MemContainer;
