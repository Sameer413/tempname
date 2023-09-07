import React from 'react'
import './AddProduct.css'
import { PiImagesThin } from 'react-icons/pi'

const AddProduct = () => {
    return (
        <div className="AddProduct">
            <div className="add-product-main">
                <div className='add-prod-title'>Add Product</div>
                <div style={{ display: "flex" }}>
                    <div className="add-prod-left">
                        <span>Add Image</span>
                        <div className="add-prod-img">
                            <PiImagesThin size={180} />
                            <img src="" alt="" />
                            <div>Drop your files here or Browse</div>
                        </div>
                    </div>
                    <div className="add-prod-right">
                        <form action="">
                            <div className="add-prod-field">
                                <label>Product Name</label>
                                <input type="text" />
                            </div>
                            <div className="add-prod-field">
                                <label>Description</label>
                                <input type="text" />
                            </div>
                            <div className="add-prod-field">
                                <label>Category</label>
                                <input type="text" />
                            </div>
                            <div className="add-prod-field">
                                <label>Price</label>
                                <input type="number" />
                            </div>
                            <div className="add-prod-field">
                                <label>Discount</label>
                                <input type="text" />
                            </div>
                            <button>Publish Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct