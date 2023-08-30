import React, { useRef, useState } from 'react'
import { styled } from 'styled-components'
import adDisplay from '../../assets/adDisplay.webp'
import { topProducts } from '../../../data'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'


const TopProducts = ({ advertise }) => {

    const ref = useRef(null);

    return (
        <Wrapper>
            <div
                className="top-product-main"
                style={advertise ? { width: "calc(100% - 247px)" } : { width: "100%" }}
            >
                <div className="top-product-title">Best of Electronics</div>
                <div
                    ref={ref}
                    className="top-product-carts"
                >
                    {topProducts.map((product, i) => {
                        return (
                            <ProductCart
                                key={i}
                                img={product.img}
                                title={product.title}
                                title1={product.title1}
                            />
                        )
                    })}

                    <button
                        className="tp-scroll-btn scroll-left"
                        onClick={() => { ref.current.scrollLeft -= 422 }}
                    >
                        <IoIosArrowBack size={25} />
                    </button>

                    <button
                        className="tp-scroll-btn scroll-right"
                        onClick={() => { ref.current.scrollLeft += 422 }}
                    >
                        <IoIosArrowBack size={25} />
                    </button>

                </div>
            </div>
            {advertise && <div className="top-product-adimg">
                <img src={adDisplay} alt="" />
            </div>}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 8px 0;
    display: flex;
    align-items: flex-start;
    
    .top-product-main {
        position: relative;
        /* width: calc(100% - 247px); //Subtracting the image width from 100% */
        margin: 8px 0;
        margin-right: 16px;
        background: #fff;
        

        .top-product-title{
            padding: 16px;
            font-size: 22px;
            font-weight: 500;
        }

        .top-product-carts{
            padding: 0 6px 12px 6px;
            display: flex;
            overflow-x: scroll;
            scroll-behavior: smooth;
            .scroll-left{
                left: 0;
                border-radius: 0 10px 10px 0;
            }
            .scroll-right{
                right: 0;
                transform: rotate(180deg);
                border-radius: 0 10px 10px 0;
            }
            .tp-scroll-btn{
                position: absolute;
                top: 40%;
                background: #fff;
                border: none;
                box-shadow: 0 1px 4px rgba(0,0,0,.12);
                height: 100px;
                width: 35px;
            }
            
        }
    }

    .top-product-adimg {
        width: 247px;
        height: 364px;

        & > img {
            aspect-ratio: 28 / 43;
            width: 100%;
            object-fit: contain;
            height: 100%;
        }

    }
`;


// Cart
const ProductCart = ({ img, title, title1 }) => {
    return (
        <Link to={"/products"} style={{ color: "#000" }}>
            <CartWrapper className="top-product-cart" >
                <div className="top-product-cart-img">
                    <img src={img} alt="" />
                </div>
                <div className="top-product-cart-title">
                    {title}
                </div>
                <div className="top-product-cart-title" style={{ fontWeight: 600, }}>
                    {title1}
                </div>
            </CartWrapper>
        </Link>
    );
}

const CartWrapper = styled.div`
    margin: 0 8px;
    padding: 6px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    display: inline-block;

    &>div{
        text-align:center;
    }

    .top-product-cart-img{
        width: 210px;
        height: 210px;

        &>img{
            width: 100%;
            height: 100%;
        }
    }
    .top-product-cart-img:hover >img{
        transform: scale(1.02);
        transition: 0.1s ease-in-out;
    }
    .top-product-cart-title{
        padding-top: 8px;
    }
`;

export default TopProducts;