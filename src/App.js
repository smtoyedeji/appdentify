import React, { useState } from 'react';
import StartGame from "./components/StartGame";
import Game from "./components/Game";

const orange = require('./images/orange.png')
const banana = require('./images/banana.png')
const chair = require('./images/chair.png')
const fork = require('./images/fork.png')
const house = require('./images/house.png')
const phone = require('./images/phone.png')
const pot = require('./images/pot.png')
const refrigerator = require('./images/refrigerator.png')
const spoon = require('./images/spoon.png')
const table = require('./images/table.png')


function App() {

  const data = [
    {
      question: 'Identify an orange',
      answerOptions: [
        { image: orange, isCorrect: true },
        { image: banana, isCorrect: false },      
      ],
    },
    {
      question: 'Identify a chair',
      answerOptions: [
        { image: chair, isCorrect: true },
        { image: table, isCorrect: false },      
      ],
    },
    {
      question: 'Identify a pot',
      answerOptions: [
        { image: pot, isCorrect: true },
        { image: spoon, isCorrect: false },      
      ],
    },
    {
      question: 'Identify a refrigerator',
      answerOptions: [
        { image: fork, isCorrect: false },
        { image: refrigerator, isCorrect: true },      
      ],
    },
    {
      question: 'Identify a phone',
      answerOptions: [
        { image: house, isCorrect: false },
        { image: phone, isCorrect: true },      
      ],
    },
    {
      question: 'Identify a fork',
      answerOptions: [
        { image: fork, isCorrect: true },
        { image: spoon, isCorrect: false },      
      ],
    },
    {
      question: 'Identify a pot',
      answerOptions: [
        { image: pot, isCorrect: true },
        { image: orange, isCorrect: false },      
      ],
    },
    {
      question: 'Identify a table',
      answerOptions: [
        { image: table, isCorrect: true },
        { image: refrigerator, isCorrect: false },      
      ],
    },
    {
      question: 'Identify a chair',
      answerOptions: [
        { image: banana, isCorrect: false },
        { image: chair, isCorrect: true },      
      ],
    },
    {
      question: 'Identify a table',
      answerOptions: [
        { image: house, isCorrect: false },
        { image: table, isCorrect: true },      
      ],
    },
  ];
  


  const [gameStart, setGameStart] = useState(false)
  const [gameData, setGameData] = useState(data)
  const runGame = () => {
    setGameStart(true)
  }
 

  return (
    <div className="App w-screen h-screen">
        {!gameStart && <StartGame runGame={runGame}/>}
        {gameStart && <Game gameData={gameData} setGameData={setGameData}/>}
    </div>
  );
}

export default App;
