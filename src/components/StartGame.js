import React from "react"
import logo from "../images/logo.png";
import "../styles/StartGame.css";




function StartGame({ runGame }) {
     
  return (
    
    <div className="wrapper">
      <div className="start--game">
        <h4>Welcome to</h4>
        <img src={logo} alt="game-logo" className="logo" />
        <h1>appdentify</h1>
        <button onClick={runGame}>Start Game</button>
      </div>
      <div className="bg"></div>
    </div>

  );
}

export default StartGame;