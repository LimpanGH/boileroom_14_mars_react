import React, { useState } from 'react';

function App() {
  // State to store the game board
  const [board, setBoard] = useState(Array(9).fill(''));
  // State to track the current player
  const [currentPlayer, setCurrentPlayer] = useState('X');
  // Winning conditions
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // Function to handle a click on a cell
  const handleCellClick = (index) => {
    if (board[index] === '') {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      // Check for winner after each move
      const winner = checkWinner(newBoard);
      if (winner) {
        alert(`Winner: ${winner}`);
        // Reset the game (optional)
      } else {
        // Switch player
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };
  // Function to check for a winner
  const checkWinner = (newBoard) => {
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c] && newBoard[a] !== '') {
        return newBoard[a];
      }
    }
    return null;
  };
  const reset = ()=>{
    setBoard(Array(9).fill(''))
  }
  // Render the game board
  return (
    <div className="game-board">
      <div className="current-player">Current Player: {currentPlayer}</div>
      {board.map((cell, index) => (
        <div key={index} className="cell" onClick={() => handleCellClick(index)}>
          {cell}
        </div>
      ))}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default App;
