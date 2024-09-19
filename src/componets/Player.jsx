import { useState } from 'react';

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false); //배열 구조 분해 할당

  /**
   *  handle을 이름에 포함시킴으로써
   *  이 함수가 식별자의 역할을 해서
   *  특정 상황에 작동할 것임을 의미하고, EditClick은 버튼의 내용
   */
  function handleEditClick() {
    /**
     *  만약 상태를 이전 값에 기반하여 변경하는 경우 :  상태 업데이트 함수로 새로운 함수를 보내야 함
     *  이것이 리액트가 추천하는 방식
     *  반환하고자 하는 새로운 상태값으로 보내면 안 됩니다
     *  why? 여기서 전달하는 이 함수를 리액트가 호출하여 자동적으로 현재 상태값을 가지게 되기 때문
     *  즉 이 상태 변경은 즉각적으로 수행되는 것이 아니라 리액트가 미래에 수행하고자 상태 변경 스케줄을 조율하는 것입니다
     *  이 시간은 몇 밀리초밖에 되지 않으므로 아주 빠른 시간이지만 즉각적이진 않습니다
     *  이 차이가 중요 즉 상태 변경 전의 값이 입력됩니다
     *  setIsEditing((editing) => !isEditing);
     *
     *  ★ 상태 변경시 이전의 상태값에 기반하여 변경한다면?★
     * setIsEditing((editing) => !isEditing);
     */
  }

  let playerName = <span className='player-name'>{name}</span>;
  !isEditing
    ? playerName
    : (playerName = <input type='text' value={name} required />);

  return (
    <li>
      <span className='player'>
        {playerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? '저장' : '수정'}</button>
    </li>
  );
}
export default Player;
