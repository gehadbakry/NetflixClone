import "./ListItem.css"
import { PlayFill,Plus,HandThumbsUp,HandThumbsDown } from "react-bootstrap-icons"
import { useState } from "react"
import video from '../../Marvel.mp4'

export default function ListItem({index}){

    const [isHovered,setIsHovered] =useState(false)
   // const trailer = "../";

    return(
        <div className="listItem" 
        style={{left:isHovered && index *225 -50 +index *2.5}}
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)}>
            <img className="Videoimg" src="https://images.thedirect.com/media/article_full/marvel-netflix-movies.jpg" alt=''/>

            {isHovered && (
                <>
                    <video className="VideoHome" src={video} autoPlay={true} loop/>
                    <div className=" itemInfo">
                        <div className="icons">
                            <PlayFill className="videoIcon"/>
                            <Plus className="videoIcon"/>
                            <HandThumbsUp className="videoIcon"/>
                            <HandThumbsDown className="videoIcon"/>
                        </div>
                        <div className="itemInfoTop d-flex text-align-center">
                            <span>1 hour 30 mins</span>
                            <span className="limit">+16</span>
                            <span>2007</span>
                        </div>
                        <div className="desc">
                        American media franchise and shared universe centered on a series of superhero films produced by Marvel Studios.
                        </div>
                        <div className="category">Action</div>
                    </div>
                </>
            )}
        </div>

    )
}