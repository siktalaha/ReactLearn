import React ,{useContext}from 'react'
import Button from 'react-bootstrap/Button';
import { QuizContext } from '../helper/Context';

function MainMenu() {
    const{gameState,setGameState}=useContext(QuizContext);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
        <h1>Hello Interested to play?</h1>
        <Button variant="success"  onClick={()=>{
            setGameState("quiz")
        }}>Start</Button>
        </div>
    </div>
    </div>
  )
}

export default MainMenu