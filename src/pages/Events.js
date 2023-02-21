import axios from 'axios'
import React ,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Events({isAuth}) {
    const[apidata,setApiData]=useState([])
     let navigate=useNavigate()
    useEffect(() => {
     
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>
      setApiData(res.data))

    }, [])
    
  return (
    <div className='gridEvent'>
    {apidata.map((post)=>{
        const{id,title,body}=post;
        return(
            <div className ="cardEvent" key={id}>
            <h4>{title.slice(0,15).toUpperCase()}</h4>
            <p>  {body}</p>
        </div>
        )
    })}
    </div>

   
  )
}

export default Events