import React ,{useContext}from 'react'
import { QuizContext } from '../helper/Context';

function MainMenu() {
    const{gameState,setGameState}=useContext(QuizContext);
  return (
    <div>
        <h1>Hello Interested to play?</h1>
        <button onClick={()=>{
            setGameState("quiz")
        }}>Start</button>
    </div>
  )
}

export default MainMenu