import React,{useState} from 'react';

import './App.css';
import Form from './Form';
import Wall from './Wall';
import Result from './Result';
import Summary from './Summary';

function App() {

  const [nickName, setNickName] = useState('')
  const[showLoginForm, setShowLoginForm] = useState(true)
  const[showWall, setShowWall] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [goodAnswer, setGoodAnswer] = useState(0)
  const [badAnswer, setBadAnswer] = useState(0)
  const [notCheckedGoodAnswer, setNotCheckedGoodAnswer] = useState(0)
  const [data, setData] = useState(
    {
      question:'Select animals',
    all_words:
     [
      {id: 1, name:'hole', active:false, isCorrect:false,},
      {id: 2, name:'sofa', active:false, isCorrect:false,},
      {id: 3, name:'tiger',active:false, isCorrect:true,},
      {id: 4, name:'oatmeal',active:false, isCorrect:false,},
      {id: 5,name:'square',active:false, isCorrect:false,},
      { id: 6, name:'nut',active:false, isCorrect:false,},
      { id: 7, name:'cub',active:false, isCorrect:false,},
      { id: 8, name:'shirt',active:false, isCorrect:false,},
      { id: 9, name:'tub',active:false, isCorrect:false,},
      { id: 10, name:'passenger',active:false, isCorrect:false,},
      { id: 11, name:'cow',active:false, isCorrect:true,},
    ],
    good_words: [
      {name:'tiger', id:3},
      {name:'cow', id: 11}
    ],
    }
  )

  const handelForm = (e) => {
    e.preventDefault()
    if(nickName){
      setShowWall(true)
      setShowLoginForm(false)
    }
  }
  const handelChange = (e) => setNickName(e.target.value)

  const matchResult = () => data.all_words.forEach((animal) => {

    if (animal.active ===true && animal.isCorrect === true){
      setGoodAnswer( counter => counter +1 )
    }else if(animal.active ===true && animal.isCorrect === false){
      setBadAnswer(counter => counter +1)
    }else if(animal.active ===false && animal.isCorrect === true){
      setNotCheckedGoodAnswer(counter => counter +1)
    }
  })

  return (
    <div className="App">
      {showLoginForm ? <Form handelForm={handelForm} handelChange={handelChange} />:null}
      {showWall ? <Wall data={data} setData={setData} setShowResult={setShowResult} setShowWall={setShowWall}/>: null }
      {showResult ? <Result data={data} setShowSummary={setShowSummary} setShowResult={setShowResult} matchResult={matchResult} />: null}
      {showSummary ? <Summary  data={data} nickName = {nickName} goodAnswer={goodAnswer} badAnswer={badAnswer} notCheckedGoodAnswer={notCheckedGoodAnswer}/>: null}
    </div>
  );
}

export default App;
