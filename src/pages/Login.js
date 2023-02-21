import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import {auth,provider} from "../firebase-config"
import { useNavigate } from 'react-router-dom'
function Login({setIsAuth}) {
    let navigate=useNavigate();
    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((res)=>{
           localStorage.setItem("isAuth",true);
           setIsAuth(true);
           navigate("/")
        })
    }
  return (
    <div className="loginPage">
        <p>Sign in with Google to continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
            sign in with google
        </button>
    </div>
  )
}

export default Login