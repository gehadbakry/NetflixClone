import React from 'react'
import './Home.css'
import NavBar from '../Components/NavBar/NavBar'
import Featued from '../Components/Featured/Featured'
import  List from '../Components/List/List'


const Home =({type})=>{
return(
    <div className='home'>
        <NavBar/>
       <Featued type={type}/>
       <List/>
       <List/>
       <List/>
       <List/>

       {/* <img  src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            /> */}
      
    </div>
)
}
export default Home;