import React,{useContext,useState} from 'react'
import Button from 'react-bootstrap/Button';
import { QuizContext } from '../helper/Context'
import { Questions } from '../helper/QuestionBank'
function EndGame() {
    const {score,setGameState,setScore}=useContext(QuizContext)
    const restartQuiz=()=>{
        setGameState("menu")
        setScore(0)
    }
  return (
    <div className="container text-center my-5 pd-5">
      <div className="row">
        <div className='col'>
        <h1 className="my-5 pd-5">We reach the end of quiz here!</h1>
        <h4>Your score is</h4>
        <h6>{score}/{Questions.length}</h6>
        <Button onClick={restartQuiz} variant="info">Restart Quiz</Button>
        </div>
        </div>
    </div>
  )
}

export default EndGame