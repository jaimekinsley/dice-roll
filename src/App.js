import React, { useState } from 'react'

export const App = () => {
  const [roll, setRoll] = useState(0);

  const standardDiceRoll = () => {
    setRoll(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <>
    <div className="grid-container">
      <h1>D&D Dice Roll App</h1>
        <div className="standard-single-roll">
          <h5>Push to roll the dice</h5>
          <button onClick={() => standardDiceRoll()}>Roll</button>
          <h3>You rolled a {roll}!</h3>
        </div>
    </div>
    </>
  )
}

export default App;
