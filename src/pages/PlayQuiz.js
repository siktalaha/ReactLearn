import React, { useContext, useState } from 'react'
import { QuizContext } from '../helper/Context';
import { Questions } from '../helper/QuestionBank';
function PlayQuiz() {
    const {gameState,setGameState,score,setScore}=useContext(QuizContext);
    const [currQuestion,setCurrQuestion]=useState(0);
    const [optionChosen,setOptionChosen]=useState("");
    const nextQuestion=()=>{
        if(Questions[currQuestion].answer === optionChosen)
          setScore(score+1);
        setCurrQuestion(currQuestion+1);
    }
    const FinishQuiz=()=>{
        if(Questions[currQuestion].answer === optionChosen)
          setScore(score+1);
        setGameState("endScreen")
    }
  return (
    <div>
        PlayQuiz
        <div className='QuizDiv'>
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className='QuizOptions'>

            <button onClick={()=>{
                setOptionChosen("optionA")
            }}>{Questions[currQuestion].optionA}</button>
            <button  onClick={()=>{
                setOptionChosen("optionA")
            }}>{Questions[currQuestion].optionB}</button>
        </div>
        <div className="QuizNextQuestion">
            {currQuestion===Questions.length-1 ?(
                <button onClick={FinishQuiz}>Finish Quiz</button>
            ):
            <button onClick={nextQuestion}>Next question</button>
            }
        </div>

        </div>
    </div>
  )
}

export default PlayQuiz