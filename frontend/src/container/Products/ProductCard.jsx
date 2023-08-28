// import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import img from '../../assets/iphone.webp'
import { Link } from 'react-router-dom'

const ProductCard = () => {
    return (
        <div className="productCard">
            <Link className="productCard-main">
                <div className="product-card-img">
                    <img src={img} alt="" />
                </div>
                {/*  */}
                <div className="product-card-details">
                    <div className="product-card-details-main">
                        <div className="product-card-detail">
                            <div className="product-card-name">
                                APPLE iPhone 11 (White, 64GB)
                            </div>
                            <div className="product-card-ratings">
                                <div className="card-rating">
                                    <BsFillStarFill size={10} /> 3.4
                                </div>
                                <span className="card-reviews">
                                    1,6465 Ratings & 1,569 Reviews
                                </span>
                            </div>
                            <div className="card-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, temporibus quasi incidunt neque soluta quod, aspernatur voluptatum, ad laudantium suscipit illum dolore distinctio debitis nesciunt?
                            </div>
                        </div>
                        {/*  */}
                        <div className="product-card-price">
                            <div className="card-price-main">
                                <div className="price-main">₹44,999</div>
                                <div className="price-main-original">₹48,999</div>
                                <div className="price-main-off">7% off</div>
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