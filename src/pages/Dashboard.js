import React ,{useState}from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Images } from '../helper/ImageBank';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'


import Offcanvas from 'react-bootstrap/Offcanvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
   

      <Offcanvas  bg={"warning"}show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>About us!
          <Figure.Caption>Our goal is to promote awareness through evnts ,seminars ,hackathon,and indulge the society into saving the mother nature</Figure.Caption>
          </Offcanvas.Title>
          
        </Offcanvas.Header>
        <Offcanvas.Body>

          <Figure>
      <Figure.Image
        width={100}
        height={100}
        alt="171x180"
        src="images/team-2.jpg"
      />
      <Figure.Caption>
      Srijita Garai,IT student @ Techno Main Salt Lake
      </Figure.Caption>
    </Figure>
    <Figure>
      <Figure.Image
      margin={10}
        width={150}
        height={150}
        alt="171x180"
        src="images/team-4.jpeg"
      />
      <Figure.Caption>
        Neha Dutta,IT student @ Techno Main Salt Lake
      </Figure.Caption>
    </Figure>
    <Figure>
      <Figure.Image
       width={150}
       height={150}
        alt="171x180"
        src="images/team-3.jpeg"
      />
      <Figure.Caption>
        Priyanka Gupta,IT student @ Techno Main Salt Lake
      
      </Figure.Caption>
    </Figure>
    <Figure>
      <Figure.Image
        width={100}
        height={100}
        alt="171x180"
        src="images/team-1.jpeg"
      />
      <Figure.Caption>
        Sikta Laha,IT student @ Techno Main Salt Lake
      </Figure.Caption>
    </Figure>
        </Offcanvas.Body>
      </Offcanvas>
      
      <div className='gridEvent'>
      <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>

<div className ="cardEvent">
              
              <h4>Quiz Contest</h4>
              <p> Stand a chance to win exciting vouchers and gifts and badge of honour as you participate in dialy ongoing competition</p>
              <Button variant="success">Get news</Button>
          </div>   
        <div className ="cardEvent">
            <h4>Nurture future</h4>
            <p> Emminient personalities join hands and enlighten you to a greener land on earth. Join us and hear them speak live .Tickets avaliable both online and offline</p>
            <Button variant="success">Go ticket</Button>
        </div>
        <div className ="cardEvent">
            <h4>Networking opertuinity <Badge bg="warning">New</Badge></h4>
            <p>Get a chance to to be a part of events unlocking the secrecy of ecosystems and let you discuss with like-minded indivuals</p>
            <Button variant="success">Get connected</Button>
        </div>
        <div className ="cardEvent">
            <h4>Write your thought</h4>
            <p> Structure your thoughts and add an ounce of emotion to it & gather trust</p>
            <Button variant="success">Listen</Button>
        </div>
        <div className ="cardEvent">
            <h4>Newsletter <Badge bg="warning">New</Badge></h4>
            <p>Are you busy ??Not have time to go through each ecological disturbances in around, no worries we are excited to get you onboard .every news that comes into existence ,is monitored and shared among elligible candidates</p>
            <Button variant="success">Sign up</Button>
        </div>
        <div className ="cardEvent">
            <h4>Hack it your way </h4>
            <p> One of a kind competiton is arranged.You will be assigned amentor based on the evaluation criteria.Exciting incentives are on your way .</p>
            <Button variant="success">Register</Button>
        </div>

    </div>
      
  <div className="mt-5 pd-5 container">
  <Card bg={'info'} text={'dark'}>
      <Card.Header  as="h5" style={{background:"blue"}}>Want to know about us?</Card.Header>
      <Card.Body>
        <Card.Title>Special title treat</Card.Title>
        <Card.Text>
          Drop in your queries here <FontAwesomeIcon icon="fa-solid fa-mailbox" />, it will be our pleasure to make you reach safely to your destination.. till then happy surfing
        </Card.Text>
        <Button variant="success" text={"warning"} onClick={handleShow}>Meet the Team!</Button>
      </Card.Body>
    </Card>
  </div>
    </>
  )
}

export default Dashboard