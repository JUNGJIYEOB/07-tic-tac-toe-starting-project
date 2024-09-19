import Player from './componets/Player';

function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player initialName='player 1' symbol='X' />
          <Player initialName='player 2' symbol='O' />
        </ol>
      </div>
      LOG
    </main>
  );
}

export default App;
