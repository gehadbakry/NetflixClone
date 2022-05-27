import "./Featured.css"
import React from 'react';
import { InfoCircle,PlayCircleFill } from 'react-bootstrap-icons'
import {  DropdownButton,Dropdown } from 'react-bootstrap';

const Featued = ({type})=>{
    return(
        <div className="featued"> 
        {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>

          {/* Genre list picked according to the page you are in */}

          <DropdownButton id="dropdown-button-dark-example2" variant="secondary" menuVariant="dark"
          title="Genre" className="mt-2 genre" name="genre">
            <Dropdown.Item value="adventure">Adventure</Dropdown.Item>
            <Dropdown.Item value="comedy">Comedy</Dropdown.Item>
            <Dropdown.Item value="crime">Crime</Dropdown.Item>
            <Dropdown.Item value="fantasy">Fantasy</Dropdown.Item>
            <Dropdown.Item value="historical">Historical</Dropdown.Item>
            <Dropdown.Item value="horror">Horror</Dropdown.Item>
            <Dropdown.Item value="romance">Romance</Dropdown.Item>
            <Dropdown.Item value="sci-fi">Sci-fi</Dropdown.Item>
            <Dropdown.Item value="thriller">Thriller</Dropdown.Item>
            <Dropdown.Item value="western">Western</Dropdown.Item>
            <Dropdown.Item value="animation">Animation</Dropdown.Item>
            <Dropdown.Item value="drama">Drama</Dropdown.Item>
            <Dropdown.Item value="documentary">Documentary</Dropdown.Item>
            </DropdownButton>
          
        </div>
      )}



            {/*Feature back ground "Afesh el film"  */}

            <img  src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />

        <div className="info">

             {/*information image "Esm el film"  */}

        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="Discription">
        orem Ipsum is simply dummy text
         of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard 
         dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.
        </span>


        {/* Controlling your movie  */}

        <div className="Buttons">
            <button className="play">
            <PlayCircleFill/>
           
            <span>Play</span>
            </button>
            <button className="more">
            <InfoCircle/>
            <span>More</span>
            </button>
        </div>
        </div>
        </div>
           
        
    )
}
export default Featued;