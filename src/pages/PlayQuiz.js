import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { QuizContext } from '../helper/Context';
import { Questions } from '../helper/QuestionBank';
function PlayQuiz() {
    const {gameState,setGameState,score,setScore}=useContext(QuizContext);
    const [currQuestion,setCurrQuestion]=useState(0);
    const [optionChosen,setOptionChosen]=useState("");
    const nextQuestion=()=>{
        if(Questions[currQuestion].ans === optionChosen)
          setScore(score+1);
        setCurrQuestion(currQuestion+1);
    }
    const FinishQuiz=()=>{
        if(Questions[currQuestion].ans === optionChosen)
          setScore(score+1);
        setGameState("endScreen")
    }
  return (
    <div>
        <div className="container text-center">
            <div className="row mx-5 my-5">
                <div className="col">
                <Card style={{ width: '35rem' ,background:'#ADE792'}}>
      <Card.Body>
        <Card.Title>Question</Card.Title>
        <Card.Subtitle className="mb-2 text-bold">{Questions[currQuestion].prompt}</Card.Subtitle>
        <Button className="mb-2 text-white text-bold mx-5 pd-5" variant="warning" onClick={()=>{setOptionChosen("optionA")}} >{Questions[currQuestion].optionA}</Button>
        <Button className="mb-2 text-white text-bold mx-5 pd-5" variant="warning" onClick={()=>{setOptionChosen("optionB")}} >{Questions[currQuestion].optionB}</Button>
      </Card.Body>
      {currQuestion===Questions.length-1 ?(
                <Button onClick={FinishQuiz}>Finish Quiz</Button>
            ):
            <Button onClick={nextQuestion}>Next question</Button>
            }
    </Card>
                </div>
            </div>
            </div>

        {/* <div className="container-fluid">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h3>{Questions[currQuestion].prompt}</h3>
            </div>
            <div className="modal-body">
                <div className="col-xs-3 5"></div>
                <div className="quiz" id="quiz" data-toggle="buttons">
                    <label className="element-animation1 btn btn-lg btn-danger btn-block" onClick={()=>{setOptionChosen("optionA")}} ><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i> {Questions[currQuestion].optionA}</span></label>
                    <label className="element-animation2 btn btn-lg btn-danger btn-block" onClick={()=>{setOptionChosen("optionA")}} ><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i>{Questions[currQuestion].optionB}</span></label>
                    <div className="QuizNextQuestion">
            {currQuestion===Questions.length-1 ?(
                <button onClick={FinishQuiz}>Finish Quiz</button>
            ):
            <button onClick={nextQuestion}>Next question</button>
            }
        </div>
                </div>
            </div>
        </div>
    </div>
</div> */}

    </div>
  )
}

export default PlayQuiz