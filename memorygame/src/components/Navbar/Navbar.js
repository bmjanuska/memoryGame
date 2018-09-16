// Navbar
// Includes link to home and scores

import React from "react"; 
import"./Navbar.css"; 

const Navbar = props => (
<nav className="navbar sticky-top navbar-light">
  <a className="navbar-brand" href="/">Memory Game</a>
  <p id="currentScore">Current Score: {props.score} </p>
  <p id="topScore">Top Score: {props.topScore} </p>
  <p id="rw">{props.rightWrong}</p>
</nav>
); 

export default Navbar; 