import React, { useState } from 'react';
import logo from "../images/logo.png";
import speaker from "../images/speaker.png";
import goodJob from "../images/welldone.png"
import "../styles/Game.css";



function Game({ gameData, setGameData }) {
  const [count, setCount] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)


  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1)
    }
    const nextCount = count + 1;
    if (nextCount < gameData.length) {
      setCount(nextCount)
    } else {
      setShowScore(true)
    }
  }
  
  return (
    <div className="game--wrapper">
      <div className="logo-container">
        <img src={logo} alt="game-logo" className="logo" />
        <h1>appdentify</h1>
      </div>
      {showScore &&
        <>
          <img src={goodJob} alt=""/>
          <p>You identified {score} out of {gameData.length} objects correctly</p>
        </>
      }

      {!showScore &&
        <>
          <div className="game--instructions">
            <img src={speaker} alt="" />
            <h4>{gameData[count].question}</h4>
          </div>
          <div className="identify">
            {
              gameData[count].answerOptions.map((option, i) => {
                return (
                  <div key={i} onClick={() => handleAnswer(option.isCorrect)}>
                    <img src={option.image} alt="" />
                  </div>
                )
              })
            }
          </div>
        </>
      }
      <button>NEXT</button>
    </div>
  )
}

export default Game