

function GameBoards({ onSelectSquare, baord }) {

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updtGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     // 이거랑 무슨 차이가 날까..?
  //     //   const updtGameBoard = [...prevGameBoard];

  //     updtGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updtGameBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id='game-board'>
      {baord.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol}
                >
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
