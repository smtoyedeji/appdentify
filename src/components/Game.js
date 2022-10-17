import React from 'react';
import logo from "../images/logo.png";
import speaker from "../images/speaker.png";
import "../styles/Game.css";
import orange from "../images/orange.png";
import banana from "../images/banana.png"


function Game() {
  return (
    <div className="game--wrapper">
      <div className="logo-container">
        <img src={logo} alt="game-logo" className="logo" />
        <h1>appdentify</h1>
      </div>
      <div className="game--instructions">
        <img src={speaker} alt="" />
        <span id="triangle">
          <span id="triangle2"></span>
        </span>
        <h4>Identify banana</h4>
      </div>
      <div className="identify">
        <div>
          <img src={orange} alt="" />
        </div>
        <div>
          <img src={banana} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Game