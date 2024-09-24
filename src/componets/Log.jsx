function Log({ turns }) {
  console.log('turns : ', turns);
  return (
    <ol id='log'>
      {turns.map((turn) => (
        /* js 문법  백틱 숫자 1 옆에 있는 특수 기호*/
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} player selected col : {turn.square.row}, row :{' '}
          {turn.square.col}{' '}
        </li>
      ))}
    </ol>
  );
}

export default Log;
