import React, { useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import {db,auth} from "../firebase-config"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function CreatePost({isAuth}) {
    let navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [post,setPost]=useState("")
    const collectionPostRef=collection(db,"posts")
    const createAPost=async () =>{
        await addDoc(collectionPostRef,{
            title:title,post:post,author:{name:auth.currentUser.displayName ,id:auth.currentUser.uid }
        })
        navigate("/")
    }
    useEffect(()=>{
        if(!isAuth)
          navigate("/login")
    },[])
  return (
    <div className='createPostPage'><div className='cpContainer'>
        <h1>Hello , Create a post</h1>
        <div className='inputGp'>
            <label>Title:</label>
            <input placeholder="Title..." onChange={(event)=>{
                setTitle(event.target.value);
            }}/>

        </div>
        <div className='inputGp'>
            <label>Post:</label>
            <textarea placeholder="Write your thoughts" onChange={(event)=>{
                setPost(event.target.value)
            }}/>
            
        </div>
        <button onClick={createAPost}>Submit Post</button>
        </div></div>
  )
}

export default CreatePost