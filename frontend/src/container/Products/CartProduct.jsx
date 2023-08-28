// import React from 'react'

import { styled } from "styled-components"
import img from '../../assets/iphone.webp'
const CartProduct = () => {
    return (
        <Wrapper>
            <div className="cart-product-img">
                <img src={img} alt="" />
            </div>
            <div className="cart-product-details">
                <div className="cart-prod-name">
                    APPLE iPhone 11 (64 GB, White)
                </div>
                <div className="cart-prod-seller">
                    Developers Community Pvt, Ltd.
                </div>
                <div className="cart-prod-prices">
                    <div className="cart-cart-pricing">
                        ₹59,999
                    </div>
                    <div className="cart-price-now">
                        ₹49,599
                    </div>
                    <div className="cart-disc-per">
                        14% Off
                    </div>
                </div>
            </div>
            <div className="cart-product-delivery">
                Delivery by Tomorrow, Sun | <span>Free </span><span style={{ color: "#717478" }}>₹40</span>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 16px;
    display: flex;

    &>.cart-product-img{
        width: 112px;
        height: 112px;

        &>img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            margin: 0 auto;
        }
    }

    &>.cart-product-details{
        padding: 0 24px 12px;
        min-height: 112px;
        flex: 1 1;
        max-width: 460px;

        &>.cart-prod-name{
            line-height: 1;
            font-size: 16px;
        }
        &>.cart-prod-seller{
            margin-top: 8px;
            color: #878787;
            font-size: 14px;
            height: 20px;
        }

        &>.cart-prod-prices{
            display: flex;
            margin-top: 18px;
            align-items: flex-end;

            &>.cart-cart-pricing{
                margin-right: 8px;
                font-size: 14px;
                color: #878787;
                text-decoration: line-through;
            }

            &>.cart-price-now{
                margin-right: 8px;
                font-size: 18px;
                font-weight: 500;
            }

            &>.cart-disc-per{
                color: #388e3c;
                font-size: 14px;
            }
        }
    }



    &>.cart-product-delivery{
        font-size: 14px;
        line-height: 1.4;

        &>span{
            color: #388e3c;
        }

        &>p{
            color: #717478;
        }
    }
`;

export default CartProduct