// import React from 'react'

import { styled } from "styled-components"
import img from '../../assets/iphone.webp'
import { useDispatch } from "react-redux"
import { removeCartProduct, updateCarQuantity } from "../../redux/features/ProductFeatures/cartSlice";

const CartProduct = ({ product }) => {
    // const id = product?.product
    const dispatch = useDispatch();

    const qtyIncHandler = () => {
        dispatch(updateCarQuantity({ productId: product?.product, quantity: 1 }));
    }
    const qtyDecHandler = () => {
        dispatch(updateCarQuantity({ productId: product?.product, quantity: -1 }));
    }

    const removeProductHandler = () => {
        dispatch(removeCartProduct(product?.product));
        window.location.reload()

    }


    return (
        <WrapperMain>
            <Wrapper>
                <div className="cart-product-img">
                    <img src={img} alt="" />
                </div>
                <div className="cart-product-details">
                    <div className="cart-prod-name">
                        {product?.name}
                    </div>
                    <div className="cart-prod-seller">
                        Developers Community Pvt, Ltd.
                    </div>
                    <div className="cart-prod-prices">
                        <div className="cart-cart-pricing">
                            ₹{product?.price}
                        </div>
                        <div className="cart-price-now">
                            ₹{product?.price}
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
            <div className="cart-inc-dec-main">
                <div className="inc-dec-controller">
                    <button onClick={qtyDecHandler}>-</button>
                    <span>{product?.quantity}</span>
                    <button onClick={qtyIncHandler}>+</button>
                </div>
                <button onClick={removeProductHandler}>Remove</button>
            </div>
        </WrapperMain>
    )
}

const Wrapper = styled.div`
    width: 100%;
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


const WrapperMain = styled.div`
    background-color: #fff;
    padding: 16px;
    margin-bottom: 4px;

    .cart-inc-dec-main{
        margin: 12px 12px;
        display: flex;
        align-items: center;

        &>.inc-dec-controller{
            display: flex;
            align-items: center;

            &>span{
                border: 1px solid #c2c2c2;
                padding: 3px 6px;
                width: 46px;
                height: 28px;
                border-radius: 2px;
                margin: 0 5px;
                text-align: center;
            }

            &>button{
                border-radius: 50%;
                height: 25px;
                width: 25px;
                background: linear-gradient(#fff,#f9f9f9);
                font-size: 25px;
                text-align: center;
                line-height: 1;
                border: 1px solid #c2c2c2;
                display: inline-block;
                cursor: pointer;
            }
        }


        &>button{
            background: transparent;
            border: none;
            margin-left: 12px;
            font-weight: 500;
            font-size: 16px;
            cursor: pointer;
        }
    }
`
export default CartProduct