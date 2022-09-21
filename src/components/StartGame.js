import logo from "../images/logo.png";
import "../styles/StartGame.css";



function StartGame() {
  return (
    <div className="wrapper">
      <div className="start--game">
        <h4>Welcome to</h4>
        <img src={logo} alt="" className="logo" />
        <h1>appdentify</h1>
        <button>Start Game</button>
      </div>
      <div className="bg"></div>
    </div>

  );
}

export default StartGame;