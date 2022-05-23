import "./ListItem.css"
import { PlayFill,Plus,HandThumbsUp,HandThumbsDown } from "react-bootstrap-icons"
import { useState } from "react"

export default function ListItem(index){

    const [isHovered,setIsHovered] =useState(false)

    return(
        <div className="listItem" 
        style={{left:isHovered && index *225 -50}}
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)}>
            <img src="https://images.thedirect.com/media/article_full/marvel-netflix-movies.jpg" alt=''/>
            <div className=" itemInfo">
                <div className="icons">
                    <PlayFill/>
                    <Plus/>
                    <HandThumbsUp/>
                    <HandThumbsDown/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 30 mins</span>
                    <span className="limit">+16</span>
                    <span>2007</span>
                </div>
                <div className="desc">
                American media franchise and shared universe centered on a series of superhero films produced by Marvel Studios. The films are based on characters that appear in American comic books published by Marvel Comics. The franchise also includes television series, short films, digital series, and literature. The shared universe, much like the original Marvel Universe in comic books, was established by crossing over common plot elements, settings, cast, and characters.
                </div>
            </div>
        
        </div>

    )
}