// Navbar
// Includes link to home and scores

import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
      <ul class="navbar-nav mr-auto">
        <li id="currentScore">
          <a class="nav-link" href="/">Memory Game</a>
        </li>
      </ul>
    </div>
    <div class="mx-auto order-0">
      <span class="nav-item">
        <span class="nav-link" id="rw">{props.rightWrong}</span>
      </span>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <span class="nav-link" id="currentScore">Current Score: {props.score}</span>
        </li>
        <li class="nav-item">
          <span class="nav-link" id="topScore">Top Score: {props.topScore}</span>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar; 
