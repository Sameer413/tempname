import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/iphone.webp'
import { BsFillStarFill } from 'react-icons/bs'
import './AdminProducts.css'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { adminProducts } from '../../redux/features/AdminFeatures/AdminSlice'


const AdminProdCard = ({ name, description, price, reviews, ratings, id }) => {
    return (
        <div className="admin-product">
            <div className="admin-product-img">
                <img src={img} alt="" />
            </div>
            {/*  */}
            <div className="admin-product-details">
                <div className="adm-prod-name">
                    {name}
                </div>
                <div className="adm-product-ratings">
                    <div className="card-rating">
                        <BsFillStarFill size={10} /> 3.4
                    </div>
                    <span className="card-reviews">
                        {ratings?.length} Ratings & {reviews?.length} Reviews
                    </span>
                </div>
                <div className="adm-product-desc">
                    {description}
                </div>
            </div>
            <div className="card-price-main adm-prod-price">
                <div className="price-main">₹{price}</div>
                <div className="price-main-original">₹{365}</div>
                <div className="price-main-off">36% off</div>
                <div className="adm-prod-update">
                    <Link to={`/admin/update/product/${id}`}>Update</Link>
                </div>
            </div>

        </div>
    )
}
const AdminProducts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(adminProducts())
    }, [])

    const { product } = useSelector(state => state.admin)
    return (
        <Wrapper>
            {product && product?.products?.map((product) => (
                <AdminProdCard
                    key={product._id}
                    id={product?._id}
                    name={product.name}
                    description={product?.description}
                    price={product?.price}
                    reviews={product?.reviews}
                    ratings={product?.ratings}
                />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 80%;
    padding: 10px 20px;
    height: 100%;

`

export default AdminProducts