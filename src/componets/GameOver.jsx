function GameOver({ winner, onRestart }) {
  console.log('winner : ', winner);
  return (
    <div id='game-over'>
      <h2>Game Over</h2>
      {/* {winner && <p>winner won!</p>}
      {!winner && <p>It&apos;s a draw!</p>} */}
      {winner ? <p>{winner} winner won!</p> : <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={onRestart}>Remactch!</button>
      </p>
    </div>
  );
}
export default GameOver;
