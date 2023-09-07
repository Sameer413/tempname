import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/iphone.webp'
import { BsFillStarFill } from 'react-icons/bs'
import './AdminProducts.css'
import { styled } from 'styled-components'

const AdminProdCard = () => {
    return (
        <div className="admin-product">
            <div className="admin-product-img">
                <img src={img} alt="" />
            </div>
            {/*  */}
            <div className="admin-product-details">
                <div className="adm-prod-name">
                    Apple iPhone 15
                </div>
                <div className="adm-product-ratings">
                    <div className="card-rating">
                        <BsFillStarFill size={10} /> 3.4
                    </div>
                    <span className="card-reviews">
                        {0} Ratings & {0} Reviews
                    </span>
                </div>
                <div className="adm-product-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto autem a nulla nam id, inventore dolorum excepturi! Perferendis voluptates quidem facilis velit, explicabo error?
                </div>
            </div>
            <div className="card-price-main adm-prod-price">
                <div className="price-main">₹{291}</div>
                <div className="price-main-original">₹{365}</div>
                <div className="price-main-off">36% off</div>
                <div className="adm-prod-update">
                    <button>Update</button>
                </div>
            </div>

        </div>
    )
}
const AdminProducts = () => {
    return (
        <Wrapper>
            <AdminProdCard />
            <AdminProdCard />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 80%;
    padding: 10px 20px;
    height: 100%;

`

export default AdminProducts