import { useEffect, useState } from 'react';
import { PiImagesThin } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetProduct, adminUpdateProduct } from '../../redux/features/AdminFeatures/AdminSlice';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const dispatch = useDispatch();
    const params = useParams()

    const { product } = useSelector(state => state.admin.product || "")

    const defaultProduct = product || {
        name: "",
        description: "",
        price: "",
        category: "",
    };

    // Initialize state variables with default values
    const [prodName, setProdName] = useState(defaultProduct.name);
    const [prodDesc, setProdDesc] = useState(defaultProduct.description);
    const [prodPrice, setProdPrice] = useState(defaultProduct.price);
    const [prodCategory, setProdCategory] = useState(defaultProduct.category);
    const [prodDiscount, setProdDiscount] = useState(0);

    useEffect(() => {
        dispatch(adminGetProduct(params.id))
    }, [dispatch, params.id])


    const updateHandler = (e) => {
        e.preventDefault()
        dispatch(
            adminUpdateProduct({
                id: params.id,
                credentials: {
                    name: prodName ? prodName : product?.name,
                    price: prodPrice ? prodPrice : product?.price,
                    description: prodDesc ? prodDesc : product?.description,
                    category: prodCategory ? prodCategory : product?.category
                }
            }))
    }
    return (
        // update product
        <div className="AddProduct">
            <div className="add-pro duct-main">
                <div className='add-prod-title'>Update Product</div>
                <div style={{ display: "flex" }}>
                    <div className="add-prod-left">
                        <span>Update Image</span>
                        <div className="add-prod-img">
                            <PiImagesThin size={180} />
                            <img src="" alt="" />
                            <div>Drop your files here or Browse</div>
                        </div>
                    </div>
                    <div className="add-prod-right">
                        <form action="" onSubmit={updateHandler}>
                            <div className="add-prod-field">
                                <label>Product Name</label>
                                <input
                                    name='name'
                                    value={prodName}
                                    onChange={(e) => setProdName(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <div className="add-prod-field">
                                <label>Description</label>
                                <input
                                    value={prodDesc}
                                    onChange={(e) => setProdDesc(e.target.value)}
                                    name='description'
                                    type="text"

                                />
                            </div>
                            <div className="add-prod-field">
                                <label>Category</label>
                                <input
                                    name='category'
                                    value={prodCategory}
                                    onChange={(e) => setProdCategory(e.target.value)}
                                    type="text" />
                            </div>
                            <div className="add-prod-field">
                                <label>Price</label>
                                <input
                                    value={prodPrice}
                                    onChange={(e) => setProdPrice(e.target.value)}
                                    type="number" />
                            </div>
                            <div className="add-prod-field" >
                                <label>Discount</label>
                                <input
                                    value={prodDiscount}
                                    onChange={(e) => setProdDiscount(e.target.value)}
                                    type="text"
                                />
                            </div>
                            <button type='submit'>Update Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct