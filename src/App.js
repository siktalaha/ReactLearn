
import './App.css';
import Home from "./pages/Home"
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import CreatePost from './pages/CreatePost';
import Quiz from './pages/Quiz';
import Login from "./pages/Login"
import Events from './pages/Events';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
function App() {
  //let navigate=useNavigate();
  const [isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));
  const userLogOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false);
      window.location.pathname="/login"
      
    })
  }
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      
        {!isAuth ? <Link to="/login">Login</Link>:<> <Link to="/getQuiz">Quiz</Link> <Link to="/getNews">Events</Link><Link to="/createpost">CreatePost</Link><button onClick={userLogOut}>LogOut</button></>}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth
        }/>}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
        <Route path="/getNews" element={<Events isAuth={isAuth}/>}/>
        <Route path="/getQuiz" element={<Quiz isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
