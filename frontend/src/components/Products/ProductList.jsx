// import React from 'react'
import ProductCard from '../../container/Products/ProductCard'
import './ProductList.css'

const ProductList = () => {
    return (
        <div className="productList">
            <div className="product-list-top">

                <span>
                    Showing 1 - 24 of 69 result for "iphone 11"
                </span>
                <div>
                    <span>Sort By</span>
                    <div className="prod-list-top-opt">Relevence</div>
                    <div className="prod-list-top-opt">Popularity</div>
                    <div className="prod-list-top-opt">Price -- Low to High</div>
                    <div className="prod-list-top-opt">Price -- High to Low</div>
                    <div className="prod-list-top-opt">Newest First</div>
                </div>

            </div>
            <div className="product-list-main">
                <div className="product-list-main-inner">
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default ProductList