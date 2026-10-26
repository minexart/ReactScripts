import { useState } from "react";

function ScoreTracker() {

    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    function player1Correct() {
        if (score1 < 5) {
            setScore1(score1+1);
        }
    }

    function player1Wrong() {
        if(score1 > 0) {
            setScore1(score1 - 1);
        }
    }

    function player2Correct() {
        if(score2 < 5) {
            setScore2(score2+1);
        }
    }

    function player2Wrong() {
        if(score2 > 0) {
            setScore2(score2 - 1);
        }
    }

    function resetScores() {
        setScore1(0);
        setScore2(0);
    }

    let message = "";

    if (score1 === 5) {
        message = "Player 1 Wins!";
    }

    if (score2 === 5) {
        message = "Player 2 Wins!";
    }

    let gameOver = false;

    if (message !== "") {
            gameOver = true;

    }


    return (
        <div style={{ border: "1px solid black", width: "250px", margin: "20px auto", padding: "10px", }}>
            <h1>Score Tracker</h1>
            <h2>Player 1 Score: {score1}</h2>
            <br/>
            <button onClick={player1Correct} disabled={gameOver}>Correct +1</button> 
            <button onClick={player1Wrong} disabled={gameOver}>Wrong -1</button>
            <br/>

            <br/>
            <h2>Player 2 Score: {score2}</h2>
            <br/>
            <button onClick={player2Correct} disabled={gameOver}>Correct +1 </button> 
            <button onClick={player2Wrong} disabled={gameOver}>Wrong -1</button>
            <br/>

            <br/>
            <h2 style={{color: "brown"}}>{message}</h2>
            <br/>

            <br/>
            <button onClick={resetScores}>Reset Scores</button>

        </div>
    );
}

export default ScoreTracker;
