// Navbar
// Includes link to home and scores

import React from "react"; 

const Navbar = props => (
<nav className="navbar sticky-top navbar-light bg-light">
  <a className="navbar-brand" href="https://google.com">Fixed top</a>
  <p id="currentScore">Current Score: {props.score} </p>
  <p id="topScore">Top Score: {props.topScore} </p>
  <p id="rw">{props.rightWrong}</p>
</nav>
); 

export default Navbar; 