import { useState } from 'react';

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false); //배열 구조 분해 할당

  let playerName = <span className='player-name'>{name}</span>;
  /**
   *  handle을 이름에 포함시킴으로써
   *  이 함수가 식별자의 역할을 해서
   *  특정 상황에 작동할 것임을 의미하고, EditClick은 버튼의 내용
   */
  function handleEditClick() {
    !isEditing ? setIsEditing(true) : isEditing;
    console.log('isEditing : ', isEditing);

    console.log('playerName : ', playerName);
  }
  isEditing ? (playerName = <input type='text' required />) : playerName;
  return (
    <li>
      <span className='player'>
        {playerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
export default Player;
