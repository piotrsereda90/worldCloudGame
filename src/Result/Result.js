import React from 'react';

const Result = ({data, setShowSummary, setShowResult, matchResult}) => {

  const finishGame = () => {
    setShowSummary(true)
    setShowResult(false)
    matchResult()
  }

  const animalData = data.all_words.map((animal, id) => {

    if (animal.active ===true && animal.isCorrect === true){
      return(
        <div className='animal' key={`${id}animal`}>
          <div>
            <p style={{color:'green'}}>
              Good
            </p>
          </div>
          <div>
            <p style={{color:'green'}}>
              {animal.name}
            </p>
          </div>
        </div>
      )
    }else if(animal.active ===true && animal.isCorrect === false){
      return(
        <div className='animal' key={`${id}animal`}>
          <div>
            <p style={{color:'red'}}>
              Bad
            </p>
          </div>
          <div>
            <p style={{color:'red'}}>
             {animal.name}
            </p>
          </div>
        </div>
      )
    }else{
      return(
        <div className='animal' key={`${id}animal`}>
          <p>
            {animal.name}
          </p>
        </div>
      )
    }
  })

  return (
    <div className='wallWrapper'>
      <div className='question'>
        <h1>{data.question}</h1>
      </div>
      <div className='animalWrapper'>
        {animalData}
      </div>
      <div className='checkButtonWrapper'>
        <button onClick={finishGame} className='checkButton'>finish game</button>
      </div>
    </div>
   );
}

export default Result;
