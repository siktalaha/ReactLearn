import React ,{useEffect,useState}from 'react'
import { Images } from '../helper/ImageBank';
import Home from './Home';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Gallery = () => {
    const[photos,setPhotos]=useState([]);
    const getPhotos= async ()=>{
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/photos");
        
            setPhotos(await response.json());
        }
        catch(error)
        {
           
            console.log("Error detected");
        }
    }
    useEffect(()=>{
        setPhotos(Images);
    },[]);
  return (
    <>
      
      <div className='container-fluid text'>
      <h2 className="text-danger text-center my-5">Let's look at the world with 60 mm lens</h2>
       
        <div className="gridEvent">
       {
photos.map((curElem) => {

    const { image,id,category} = curElem;
return (
    <Card key={id} style={{ width: '18rem' ,padding:"1.5rem"}}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{category}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Know more</Button>
    </Card.Body>
  </Card>
)
})        

}</div>


       </div>

    
    </>
  )
}

export default Gallery