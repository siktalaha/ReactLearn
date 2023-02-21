import React,{useContext,useState} from 'react'
import { QuizContext } from '../helper/Context'
import { Questions } from '../helper/QuestionBank'
function EndGame() {
    const {score,setGameState,setScore}=useContext(QuizContext)
    const restartQuiz=()=>{
        setGameState("menu")
        setScore(0)
    }
  return (
    <div>
        <h1>We reach the end of quiz here!</h1>
        <h4>Your score is</h4>
        <h6>{score}/{Questions.length}</h6>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndGame