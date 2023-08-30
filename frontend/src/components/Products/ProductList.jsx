// import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../../container/Products/ProductCard'
import './ProductList.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/features/ProductFeatures/productSlice'
import Loader from '../Layouts/Loader'

const ProductList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const { products, loading } = useSelector(state => state.product)

    return (
        loading ? (
            <Loader />
        ) : (
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

                        {products?.products?.map((item) => {
                            return (
                                <ProductCard
                                    key={item._id}
                                    productName={item.name}
                                    price={item.price}
                                    description={item.description}
                                    ratings={item.ratings}
                                    reviews={item.reviews}
                                    _id={item._id}
                                />
                            )
                        })}


                    </div>
                </div>
            </div>
        )
    )
}

export default ProductList