import React,  { useState, useEffect } from 'react';

function App() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
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
  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
      setWinner(winner);
    } else if (board.every(cell => cell !== '')) {
      setWinner('Draw');
    }
  }, [board]);
  const handleCellClick = (index) => {
    if (board[index] === '' && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };
  const checkWinner = (board) => {
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (board[a] === board[b] && board[a] === board[c] && board[a] !== '') {
        return board[a];
      }
    }
    return null;
  };
  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
  };
  return (
    <div className="game-board">
      {board.map((cell, index) => (
        <div key={index} className="cell" onClick={() => handleCellClick(index)}>
          {cell}
        </div>
      ))}
      {winner && (
        <div className="winner">
          {winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner}`}
          <button onClick={resetGame}>Reset Game</button>
        </div>
      )}
      {!winner && (
        <div className="current-player">Current Player: {currentPlayer}</div>
      )}
    </div>
  );
}
export default App;
