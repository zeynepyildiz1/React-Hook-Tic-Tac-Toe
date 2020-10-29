import React, {useState} from 'react';
import "./index.css";
import Square from './Square';
import {Winner} from "./Winner"
function Game() {
 const [squares,setSquare]= useState(Array(9).fill(null))
 const [isXNext, setisXNext] = useState(true);

const winningInfo = Winner(squares);
const winner = winningInfo.winner;

const winnerHighlight = winningInfo.line;
let status;
if (winner) {
  status = "Hurray the winner is " + winner;
} else if (winningInfo.isDraw) {
  status = "It's a Draw";
} else {
  status = "Next Player is " + (isXNext ? "X" : "O");
}

function renderSquare(i){
    return  <Square 
        onClick={()=>{
            const nextSquare=squares.slice();
            nextSquare[i]= isXNext?"X":"O";
            setisXNext(!isXNext);
            setSquare(nextSquare)
        }}
        value={squares[i]}
        highlightWinner={winnerHighlight&&winnerHighlight.includes(i)}
        />;
    
}
return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
export default Game
