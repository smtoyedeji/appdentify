import React, { useState } from 'react';
import StartGame from "./components/StartGame";
import Game from "./components/Game";
import data from "./data"


function App() {
  const [gameStart, setGameStart] = useState(false)
  const runGame = () => {
    setGameStart(true)
  }
  console.log(data)
  return (
    <div className="App w-screen h-screen">
        {!gameStart && <StartGame runGame={runGame}/>}
        {gameStart && <Game />}
    </div>
  );
}

export default App;
