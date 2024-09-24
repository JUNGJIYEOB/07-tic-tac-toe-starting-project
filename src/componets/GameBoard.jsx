function GameBoards({ onSelectSquare, baord }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  // 깊은 복사 : 객체가 복잡한 구조(2depth 이상)여도, 전부 복사하는 것을 말한다.
  //   setGameBoard((prevGameBoard) => {
  //     const updtGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     // 이거랑 무슨 차이가 날까..? => 얕은 복사: 객체의 1depth까지만 복사하는 것을 말한다.
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
