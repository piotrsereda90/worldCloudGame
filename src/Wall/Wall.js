import React from 'react';

import '../App.css';


const Wall = ({data, setData, setShowResult, setShowWall}) => {

  const showResultWall =() => {
    setShowResult(true)
    setShowWall(false)
  }
  const handelClick = (id) => {
    const newData = [...data.all_words];
    newData.forEach(item => {
      if(item.id === id) {
        item.active = !item.active;
      }
      setData(prevState => ({
        ...prevState,
        all_words: newData
      }))
    })
  }
  const animalData = data.all_words.map((animal, id) => (
    <div className='animal' key={`${id}animal`}>
      <p className='word' style={animal.active?{color:'#ddd'}:null}
        onClick={
          ()=>handelClick(animal.id)}>
        {animal.name}
      </p>
    </div>
  ))
  return (
    <div className='wallWrapper'>
      <div className='question'>
        <h1>{data.question}</h1>
      </div>
      <div className='animalWrapper'>
        {animalData}
      </div>
      <div className='checkButtonWrapper'>
        <button onClick={showResultWall} className='checkButton'>check answers</button>
      </div>
    </div>
  );
}

export default Wall;
