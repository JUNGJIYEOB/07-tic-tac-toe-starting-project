function Log({ turns }) {
  return (
    <ol id='log'>
      {turns.map((turn) => (
        /* js 문법  */
        <li key={'${turn.square.row}${turns.square.col}'}>
          {turn.player} selected col : {turn.square.row}, row :{' '}
          {turn.square.col}{' '}
        </li>
      ))}
    </ol>
  );
}

export default Log;
