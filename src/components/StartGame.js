import logo from "../images/logo.png";
// import vector from "../images/vector.png";




function StartGame() {
  return (
    <div className="wrapper">
      <div className="start--game">
        <h4>Welcome to</h4>
        <img src={logo} alt="" className="logo" />
        <h1>appdentify</h1>
        <button>Start Game</button>
      </div>
      {/* <img src={vector} alt="" className="vector"/> */}
    </div>

  );
}

export default StartGame;