
import './App.css';
import Home from "./pages/Home"
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import CreatePost from './pages/CreatePost';
import PastEvents from './pages/PastEvents';
import Dashboard from "./pages/Dashboard";
import Quiz from './pages/Quiz';
import Login from "./pages/Login"
import Gallery from "./pages/Gallery";
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
        
      
   
        {!isAuth ? <><Link to="/">Home</Link><Link to="/pastEvents">What we do?</Link><Link to="/login">Login</Link></>:<> <Link to="/gallery">Gallery</Link><Link to="/homepost">Posts</Link> <Link to="/getQuiz">Quiz</Link> <Link to="/getNews">Events</Link><Link to="/createpost">CreatePost</Link><button onClick={userLogOut}>LogOut</button></>}
      </nav>
      <Routes>
      <Route path="/" element={<Dashboard />}/>
        <Route path="/homepost" element={<Home isAuth={isAuth
        }/>}/>
        <Route path="/pastEvents" element={<PastEvents/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
        <Route path="/getNews" element={<Events isAuth={isAuth}/>}/>
        <Route path="/getQuiz" element={<Quiz isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
