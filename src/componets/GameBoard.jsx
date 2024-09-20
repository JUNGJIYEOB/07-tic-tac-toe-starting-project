import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoards() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updtGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      // 이거랑 무슨 차이가 날까..?
      //   const updtGameBoard = [...prevGameBoard];

      console.log('updtGameBoard : ', updtGameBoard);
      updtGameBoard[rowIndex][colIndex] = 'X';
      return updtGameBoard;
    });
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
export default GameBoards;
