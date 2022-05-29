import './NewMovie.css'

export default function NewMovie() {
  return (
    <div className='newProduct'>
        <h1 className="addProductTitle">Create Product</h1>
        <form className="addProductForm">
            <div className="newProductItem">
                <label>Name</label>
                <input type="text" placeholder="Enter name"/>
            </div>
            <div className="newProductItem">
                <label>Description</label>
                <input type="text" placeholder="Enter description"/>
            </div>
            <div className="newProductItem">
                <label>Release Year</label>
                <input type="tesxt" placeholder="Enter release Year"/>
            </div>
            <div className="newProductItem">
                <label>Duration</label>
                <input type="text" placeholder="Enter duration"/>
            </div>
            <div className="newProductItem">
                <label>Image</label>
                <input type="file" id="file" placeholder="Enter name"/>
            </div>
            <button className="newProductButton">Create</button>
        </form>
    </div>
  )
}
