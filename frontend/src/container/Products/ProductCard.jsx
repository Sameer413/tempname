// import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import img from '../../assets/iphone.webp'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    const {
        productName,
        price,
        description,
        ratings,
        reviews,
        _id
    } = props;

    const discountPrice = (initialPrice) => {
        return Math.floor(initialPrice - ((36 / 100) * initialPrice));
    }

    return (
        <div className="productCard">
            <Link to={`/product/${_id}`} className="productCard-main">
                <div className="product-card-img">
                    <img src={img} alt="" />
                </div>
                {/*  */}
                <div className="product-card-details">
                    <div className="product-card-details-main">
                        <div className="product-card-detail">
                            <div className="product-card-name">
                                {productName || `APPLE iPhone 11 (White, 64GB)`}
                            </div>
                            <div className="product-card-ratings">
                                <div className="card-rating">
                                    <BsFillStarFill size={10} /> 3.4
                                </div>
                                <span className="card-reviews">
                                    {ratings.length || 0} Ratings & {reviews.length} Reviews
                                </span>
                            </div>
                            <div className="card-description">
                                {description}
                            </div>
                        </div>
                        {/*  */}
                        <div className="product-card-price">
                            <div className="card-price-main">
                                <div className="price-main">₹{discountPrice(price)}</div>
                                <div className="price-main-original">₹{price}</div>
                                <div className="price-main-off">36% off</div>
                            </div>

                            <div className="card-delivery">
                                Free delivery by <span>Today</span>
                            </div>
                        </div>
                    </div>
                </div>

            </Link>
        </div>
    )
}

export default ProductCard