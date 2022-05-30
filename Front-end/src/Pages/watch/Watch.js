
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation } from 'react-router-dom';
import "./Watch.css";

function Watch() {
    const location= useLocation();
    const movie= location.movie;
    return (
        <div className="watch">
            <link to="/">
                <div className="back">
                <ArrowBackIcon/>
                    Home
                </div> 
            </link>
            <video className="video"
            autoPlay
            progress
            controls
            src={movie.video}
            ></video>
            {/* <iframe className="video" src="https://www.youtube.com/embed/JfVOs4VSpmA" ></iframe> */}
        </div>
    );
}

export default Watch;