import { useState } from 'react';
import GameBoards from './componets/GameBoard';
import GameOver from './componets/GameOver';
import Log from './componets/Log';
import Player from './componets/Player';
import { WINNING_COMBINATIONS } from './componets/WINNING-COMBINATIONS.JS';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};
//js null => false
//여기선 모두 대문자=>일반상수
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
/**
 * @param {gameTurns} gameTurns
 * @returns currentPlayer
 * @description 이 헬퍼 함수는 컴포넌트와 관련된 그 어떤 상태나 데이터에 접근할 필요가 없음
 * 또한 컴포넌트 함수가 재실행 될 때 스스로 재실행하지 않아도 됨
 */
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}
function deriveGameBoard(gameTurns) {
  //[...INITIAL_GAME_BOARD] 얕은 복사(껍떼기만 복사) 객체의 1depth까지만 복사하는 것을 말한다.
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]; //깊은 복사
  for (const turn of gameTurns) {
    const { square, player } = turn; //객체 분해할당
    const { row, col } = square; //객체 분해할당 2번 한 것
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  /*
   * 86.State(상태) 관리 간소화 및 불필요한 State(상태) 분별
   * 상태가 UI 업데이트를 실행하는 것은 맞지만
   * 이미 해당 컴포넌트에는 gameState 상태가 있다는 것
   * 이 상태는 버튼을 선택할 때마다 이미 변하고 있음
   * 즉, 버튼을 클릭할 때마다 실행됨
   * 그로므로 이 activePlayer 상태를 추가로 더해서UI 업데이트를 실행시킬 필요는 없음
   * 물론 여기서 필요한 정보는 '현재 어떤 플레이어가 진행 중인지 대한 정보'이지만 이 정보는 gameTurns에서 가져올 수도 있음
   * const [activePlayer, setActivePlayer] = useState('X'); => 이 부분을 삭제하고도 파생된 상태를 더 할 수 있고
   *
   */
  const [gameTurns, setGameTurns] = useState([]); //젙체 게임에서 true/false 를 도출할 수 있는 하나뿐인 출처
  //Player 컴포넌트에 있는 state 를 끌어올리지 않은 이유 : 타이핑 칠떄마다 리로드됨
  const [players, setPlayers] = useState(PLAYERS);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex, colIndex) {
    //이전 상태에서 상태 변경을 할 때에는 하단의 방법과 같이 해야함
    setGameTurns((prevTurns) => {
      /*
       * 86.State(상태) 관리 간소화 및 불필요한 State(상태) 분별
       * 여기에선 activePlayer를 차례에 대한 상태 변화로 파생
       * let currentPlayer = 'X'
       * if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
       *    currentPlayer = 'O';
       * }
       *
       * 여기에서 상태를 이전의 gameTurns 상태로 부터 파생시켜야 함
       */
      const currentPlayer = deriveActivePlayer(prevTurns);
      //86.State(상태) 관리 간소화 및 불필요한 State(상태) 분별
      //이전 차례에 기반한 내용
      const updatedTurns = [
        /**
         * 두 종류의 상태를 병합하는 것 지양
         * 실행 시점 조율에 대한 상태 업데이트가 실행되도록 하기 위함
         */
        //{ square: { row: rowIndex, col: colIndex }, player: activePlayer },
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prvPlayes) => {
      return {
        ...prvPlayes, //이전 객체를 펼쳐서 해당key(symbol)를 바꾼다
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            initialName={PLAYERS.X}
            symbol='X'
            isActive={activePlayer === 'X'}
            onRename={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol='O'
            isActive={activePlayer === 'O'}
            onRename={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoards onSelectSquare={handleSelectSquare} baord={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
