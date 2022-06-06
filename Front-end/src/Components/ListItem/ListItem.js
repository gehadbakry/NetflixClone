import "./ListItem.css"
import { PlayFill,Plus,HandThumbsUp,HandThumbsDown } from "react-bootstrap-icons"
import { useEffect, useState } from "react"
import video from '../../Marvel.mp4'
import axios from "axios"
import { Link } from "react-router-dom"

export default function ListItem({index,item}){

    const [isHovered,setIsHovered] =useState(false)
    const [movie,setMovie] =useState({})
   // const trailer = "../";
    useEffect(() => {
        const getMovie = async()=>{
            try{
                console.log({item})
                const res=await axios.get("/movies/find/"+item,{
                    headers: {
                      token:
                      "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                  }
                )
                setMovie(res.data);
               
            }catch(err){
                console.log(err)
            }
            
        };
        getMovie()
    },[item]);
   

    return(
        <Link to={{pathname: "/watch",movie:movie}}>
            <div className="listItem" 
            style={{left:isHovered && index *225 -50 +index *2.5}}
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}>
                <img className="Videoimg" 
                src={movie.img} 
                alt=''/>

                {isHovered && (
                    <>
                        <video className="VideoHome" src={movie.trailer} autoPlay={true} loop/>
                        <div className=" itemInfo">
                            <div className="icons">
                                <PlayFill className="videoIcon"/>
                                <Plus className="videoIcon"/>
                                <HandThumbsUp className="videoIcon"/>
                                <HandThumbsDown className="videoIcon"/>
                            </div>
                            <div className="itemInfoTop d-flex text-align-center">
                                {/* <span>{movie.duration}</span> */}
                                <span className="limit">+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">
                                {movie.desc}
                            </div>
                            <div className="category">{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>

       </Link>
    )
}