// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import Users from './Pages/Users/Users';
import Error from './Pages/Error/Error';
import Main from './Pages/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/main/home' element={<Home/>}/>
        <Route path='/main/movies' element={<Movies/>}/>
        <Route path='/main/users' element={<Users/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
