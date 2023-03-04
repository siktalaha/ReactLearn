import React, { useState ,useEffect} from 'react'
import { PEvent } from '../helper/EventBank';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const PastEvents = () => {
    const[eve,setPastEvent]=useState([])
    useEffect(()=>{
        setPastEvent(PEvent);
    },[]);
    
  return (
    <div className="gridEvent">
    {
eve.map((curElem) => {

 const { eventType,promptId,eventDetail} = curElem;
return (
 <Card bg="info" key={promptId} style={{ width: '18rem' ,padding:"1.5rem"}}>
 <Card.Body>
   <Card.Title>{eventType}</Card.Title>
   <Card.Text>
     {eventDetail}
   </Card.Text>
   <Button variant="primary">Know more!</Button>
 </Card.Body>
</Card>
)
})        

}</div>
  )
}

export default PastEvents