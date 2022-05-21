import React from 'react'
import "./NavBar.css"


const NavBar =()=>{
return(
    <div className='navbar'>
        <div className='container'>
            <div className='left'> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"/>
            <span>Home Page</span>
            <span>Movies</span>
            <span>Series</span>
            <span>New</span>
            </div>
            <div className='right'>
               
            </div>
        </div>
    </div>
)
}
export default NavBar;