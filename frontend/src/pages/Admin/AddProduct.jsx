import React, { useState } from 'react'
import './AddProduct.css'
import { PiImagesThin } from 'react-icons/pi'
import { useDispatch } from 'react-redux'
import { addProductAdmin } from '../../redux/features/AdminFeatures/AdminSlice'

const AddProduct = () => {

    const dispatch = useDispatch()
    const [prodName, setProdName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [desc, setDesc] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        if (prodName === null || price === null || category === null || desc === null) {
            console.log("enter all fields");
        } else {
            dispatch(addProductAdmin({ name: prodName, price: price, category: category, description: desc }));
        }
    }


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
                        <form action="" onSubmit={submitHandler}>
                            <div className="add-prod-field">
                                <label>Product Name</label>
                                <input
                                    value={prodName}
                                    onChange={(e) => setProdName(e.target.value)}
                                    name="name"
                                    type="text"
                                />
                            </div>
                            <div className="add-prod-field">
                                <label>Description</label>
                                <input
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    name="description"
                                    type="text"
                                />
                            </div>
                            <div className="add-prod-field">
                                <label>Category</label>
                                <input
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    name="category"
                                    type="text"
                                />
                            </div>
                            <div className="add-prod-field">
                                <label>Price</label>
                                <input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    name="price"
                                    type="number"
                                />
                            </div>
                            <div className="add-prod-field">
                                <label>Discount</label>
                                <input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    name="price"
                                    type="text"
                                />
                            </div>
                            <button type='submit'>Publish Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct