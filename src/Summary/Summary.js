import React from 'react';

const Summary = ({  nickName, goodAnswer, badAnswer,notCheckedGoodAnswer }) => {

  const score = (goodAnswer*2) - (badAnswer + notCheckedGoodAnswer)

  return (
    <div className='summaryWrapper'>
      <div>
        <h1>Congratulations, {nickName}!</h1>
      </div>
      <div>
        <p>Your Score</p>
      </div>
      <div>
        {score}
      </div>
    </div>

   );
}

export default Summary;
