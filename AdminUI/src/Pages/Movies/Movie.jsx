import { Info, Publish, Schedule } from '@material-ui/icons'
import { CalendarMonth } from '@mui/icons-material'
import { Link } from 'react-router-dom' 
import './Movie.css'

export default function Movie() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newMovie">
                <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productContainer">
        <div className="productShow">
                <div className="productShowTop">
                    <img src="https://i.pinimg.com/originals/97/bf/27/97bf27becd0df4ff387b882572925416.jpg" alt="" className="productShowImg" />
                    <div className="productShowTopTitle">
                        <span className="productShowName">Captin America:Civil war</span>
                    </div>
                </div>
                <div className="productShowBottom">
                <span className="ProductShowTitle">Movie details</span>
                    <div className="ProductShowInfo"> 
                        <Schedule className='ProductShowIcon'/>
                        <span className="ProductShowInfoTitle">2:16:00</span>
                    </div>
                    <div className="ProductShowInfo"> 
                        <Info className='ProductShowIcon'/>
                        <span className="ProductShowInfoTitle">During World War II, Steve Rogers, a frail man, 
                        is transformed into the super-soldier Captain America and must stop the Red Skull from using the Tesseract as an energy source for world domination.
                        Captain America: The First Avenger.</span>
                    </div>
                    <div className="ProductShowInfo"> 
                        <CalendarMonth className='ProductShowIcon'/>
                        <span className="ProductShowInfoTitle">2016</span>
                    </div>
                </div>
            </div>
            <div className="productUpdate">
                <span className="productrUpdateTitle">Edit</span>
                <form className="productUpdateForm">
                    <div className="productUpdateLeft">
                        <div className="productUpdateItem">
                            <label>Name</label>
                            <input type="text" placeholder="Captin America:Civil war" className='productUpdateInput'></input>
                        </div>
                        <div className="productUpdateItem">
                            <label>Description</label>
                            <input type="text" placeholder="During World War II, Steve Rogers, a frail man, 
                        is transformed into the super-soldier Captain America and must stop the Red Skull from using the Tesseract as an energy source for world domination.
                        Captain America: The First Avenger." className='productUpdateInput'></input>
                        </div>
                        <div className="productUpdateItem">
                            <label>Duration</label>
                            <input type="text" placeholder="2:16:00" className='productUpdateInput'></input>
                        </div>
                        <div className="productUpdateItem">
                            <label>Release year</label>
                            <input type="text" placeholder="2016" className='productUpdateInput'></input>
                        </div>
                    </div>
                    <div className="productUpdateRight">
                        <div className="productUpdateUpload">
                            <img src="https://i.pinimg.com/originals/97/bf/27/97bf27becd0df4ff387b882572925416.jpg"
                             alt="" className="productUpdateImg" />
                            <label htmlFor="file"><Publish className='productUpdateIcon'/></label>
                            <input type="file" id="file" style={{display:"none"}}></input>
                        </div>
                        <button className="productUpdateButton">Update</button>
                    </div>
                </form>
            </div>
            {/* <div className="productTopInfo">
                <img src="https://i.pinimg.com/originals/97/bf/27/97bf27becd0df4ff387b882572925416.jpg" alt="" className="productInfoImg" />
                <span className="productInfoName">Captin America:Civil war</span>
            </div> 
            <div className="productshowBottom">
                    <span className="ProductShowTitle">Movie details</span>
                    <div className="ProductShowInfo"> 
                        <Schedule className='ProductShowIcon'/>
                        <span className="ProductShowInfoTitle">2:16:00</span>
                    </div>
                    <div className="ProductShowInfo"> 
                        <Info className='ProductShowIcon'/>
                        <span className="ProductShowInfoTitle">During World War II, Steve Rogers, a frail man, 
                        is transformed into the super-soldier Captain America and must stop the Red Skull from using the Tesseract as an energy source for world domination.
                        Captain America: The First Avenger.'</span>
                    </div>
                    <div className="ProductShowInfo"> 
                        <CalendarMonth className='ProductShowIcon'/>
                        <span className="ProductShowInfoTitle">2016</span>
                    </div>
                </div>         */}
        </div> 
    </div>
  )
}
