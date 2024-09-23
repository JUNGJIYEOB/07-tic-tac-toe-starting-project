import { useState } from 'react';
import GameBoards from './componets/GameBoard';
import Log from './componets/Log';
import Player from './componets/Player';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
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

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            initialName='player 1'
            symbol='X'
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName='player 2'
            symbol='O'
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoards onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
