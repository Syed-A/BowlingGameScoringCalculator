import React, { useState } from 'react';
import calculateBowlingScore from './CalculateBowlingScore';

// Functional component defined here listing the rules of calculating the scores for bowling
function App() {
  return (
    <>
      <title>Bowling Game Calculator</title>
      <h1 style={{ textAlign: "center" }}>Bowling Game Score Calculator</h1>
      <h4 style={{ color: "red", fontWeight: 'bold', paddingLeft: '10px' }}> Please read the scoring rules for the game below:</h4>
      <div style={{ textAlign: "left ", textIndent: 8 }}>


        <p>1. Each game, or "line" of bowling, includes ten turns, or "frames" for the bowler.</p>
        <p>2. In each frame, the bowler gets up to two tries to knock down all ten pins.</p>
        <p>3. If the first ball in a frame knocks down all ten pins, this is called a "strike". The frame is over. The score
            for the frame is ten plus the total of the pins knocked down in the next two balls. </p>
        <p>4. If the second ball in a frame knocks down all ten pins, this is called a "spare". The frame is over.
            The score for the frame is ten plus the number of pins knocked down in the next ball.</p>
        <p>6. If, after both balls, there is still at least one of the ten pins standing the score for that frame is simply
            the total number of pins knocked down in those two balls.</p>
        <p>7. If you get a spare in the last (10th) frame you get one more bonus ball. 
        If you get a strike in the last (10th) frame you get two more bonus balls. <br />
        <span style={{paddingLeft: '22px'}}>These bonus throws are taken as part of the same turn. If a bonus ball knocks down all the pins, the process does not repeat.</span>
        The bonus balls are only used to calculate the score of the final frame.</p>
        <p>8. The game score is the total of all frame scores.</p>


        <p> <span style={{ fontWeight: 'bold' }}> Note: </span> Please ensure that the Bowling Scores are entered in
        the following format in the input box below. </p>
        <p> Ex. 5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5 or X|7/|9-|X|-8|8/|-6|X|X|X||81   </p>
        <li> X indicates a strike </li>
        <li>/ indicates a spare </li>
        <li>- indicates a miss </li>
        <li>| indicates a frame boundary </li>
        <li>The characters after the || indicate bonus balls </li>

        <Form />

      </div>
    </>
  );
}

export default App;


const Form = () => {

  const [score, setScore] = useState("");
  const [finalGameScore, setFinalGameScore] = useState(0);
  function clickButton () {
    setFinalGameScore (calculateBowlingScore(score)); 
  }

  return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>

        <input type="text"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          style={{ width: "300px", height: "25px" }}
          placeholder="Enter the Bowling Scores for the frames here" />

        <button style={{ height: "30px" }} onClick={() => clickButton()}> Calculate score </button>

        <div>
          <h3 style={{ fontWeight: 'bold' }}>Game Score: {finalGameScore} </h3>
        </div>

      </div>

    </div>
  );
}

