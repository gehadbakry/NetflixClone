import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/register/Register';
import Watch from './Pages/watch/Watch';
import Login from './Pages/login/Login';
import Success from './Components/Payment/Success';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import Pay from './Components/Payment/Pay';



function App() {
  const {user} = useContext(AuthContext) ;
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={user?<Home/>:<Register/>}/>
      <Route path="/register" element={!user?<Register/>:<Home/>}/>
      <Route path="/login" element={!user?<Login/>:<Home/>}/>
      {user && (
          <>
          <Route path="/movies" element={<Home type="movie"/>}/>

          <Route path="/Series" element={<Home type="series"/>}/>

          <Route path="/watch" element={<Watch/>}/>

        </>
          )}
      </Routes>
    </Router>
    //<Pay/>
      );
}

export default App;
