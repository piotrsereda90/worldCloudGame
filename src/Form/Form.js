import React from 'react';

import '../App.css';

const Form = ({handelForm, handelChange,nickName}) => {
  return (
    <form className='nickNameForm'>
      <h1>Worldcloud Game</h1>
      <input
        onChange={handelChange}
        value={nickName}
        className='inputForm'
        type='text'
        placeholder='Enter your nickname here...'
      />
      <button className='playBtn' onClick={handelForm}>
        play
      </button>
    </form>
  );
}

export default Form;
