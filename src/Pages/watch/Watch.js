
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Watch.css";

function Watch() {
    return (
        <div className="watch">
            <div className="back">
            <ArrowBackIcon/>
                Home
            </div> 
            <iframe className="video" src="https://www.youtube.com/embed/JfVOs4VSpmA" ></iframe>
        </div>
    );
}

export default Watch;