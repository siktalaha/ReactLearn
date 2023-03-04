import React ,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import Login from './Login';
import MainMenu from './MainMenu';
import EndGame from './EndGame';
import PlayQuiz from './PlayQuiz';
import { QuizContext } from '../helper/Context';

function Quiz({isAuth}) {
    let navigate=useNavigate();
  const [gameState,setGameState]=useState("menu")
  const[score,setScore]=useState(0);
useEffect(() => {
  if(!isAuth)
     navigate("/login");
}, [])

  return (
    <div>
    <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
    {gameState==="menu" &&<MainMenu />}
    {gameState==="quiz" &&<PlayQuiz />}
    {gameState==="endScreen" &&<EndGame />}
    </QuizContext.Provider>
    </div>
  )
}

export default Quiz