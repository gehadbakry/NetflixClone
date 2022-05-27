import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/register/Register';
import Watch from './Pages/watch/Watch';
import Login from './Pages/login/Login';



function App() {
  const user = true;
  return (

      <Router>
        <Routes>
          <Route exact path="/" element={user?<Home/>:<Register/>}/>
        </Routes>
        <Routes>
          <Route path="/register" element={!user?<Register/>:<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/login" element={!user?<Login/>:<Home/>}/>
        </Routes>
        {user && (
          <>
          <Routes>
          <Route path="/movies" element={<Home type="movies"/>}/>
        </Routes>
        <Routes>
          <Route path="/Series" element={<Home type="Series"/>}/>
        </Routes>
        <Routes>
          <Route path="/watch" element={<Watch/>}/>
        </Routes>
        </>
          )}
      {/* <Watch/> */}
      {/* <Register/> */}
      {/* <Login/> */}
    
      </Router>
    
     
  );
}

export default App;
