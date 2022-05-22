import React from 'react'
import './Home.css'
import NavBar from '../Components/NavBar/NavBar'
import Featued from '../Components/Featured/Featured'
const Home =()=>{
return(
    <div className='home'>
        <NavBar/>
       <Featued />
       {/* <img  src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            /> */}
      
    </div>
)
}
export default Home;