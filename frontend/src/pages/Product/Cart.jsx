// import React from 'react'

import { styled } from "styled-components"
import CartProduct from "../../container/Products/CartProduct"

const Cart = () => {
    return (
        <Wrapper>
            <div className="cart-left">
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />


                <div className="cart-left-bottom">
                    <button>Place Order</button>
                </div>
            </div>
            <div className="cart-right">
                <div className="cart-right-heading">Price Details</div>
                <div className="cart-right-pricing">
                    <span>Price(3 item)</span>
                    <span>₹59,999</span>
                </div>
                <div className="cart-right-disc">
                    <span>Discount</span>
                    <span>-₹59,999</span>
                </div>
                <div className="cart-right-delivery">
                    <span>Delivery Charges</span>
                    <span>Free</span>
                </div>
                <div className="cart-right-total">
                    <span>Total Ammount</span>
                    <span>₹59,999</span>
                </div>
            </div>

        </Wrapper>
    )
}


const Wrapper = styled.div`
    max-width: 1260px;
    margin: 0 auto;
    margin-top: 16px;
    padding: 8px;
    display: flex;
    width: 100%;

    &>.cart-left{
        width: 70%;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
        position: relative;

        &>.cart-left-bottom{
            position: sticky;
            top: 64px;
            z-index: 2;
            bottom: 0;
            align-self: flex-start;
            width: 100%;
            border-top: 1px solid #f0f0f0;
            background: #fff;
            padding: 16px 22px;
            box-shadow: 0 -2px 10px 0 rgba(0,0,0,.1);
            text-align: right;

            &>button{
                background: #fb641b;
                box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
                border: none;
                color: #fff;
                padding: 16px 30px;
                min-width: 250px;
                text-transform: uppercase;
                border-radius: 2px;
                font-size: 16px;
                font-weight: 500;
                position: relative;
            }
        }
    }   

    &>.cart-right{
        width: 30%;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
        margin-left: 16px;
        height: 100%;
        background: #fff;
        position: sticky;
        top: 65px;
        z-index: 2;


        &>*{
            padding: 13px 24px;
            display: flex;
            justify-content: space-between;
            font-weight: 500;
        }

        &>.cart-right-heading{
            display: block;
            text-transform: uppercase;
            color: #878787;
            min-height: 47px;
            border-radius: 2px 2px 0 0;
            border-bottom: 1px solid #f0f0f0;
        }

        &>.cart-right-delivery{
            color: #388e3c;
        }
        &>.cart-right-disc{
            color: #388e3c;

        }

        &>.cart-right-total{
            margin: 20px auto;
            border-top: 1px solid #f0f0f0;
        }
    }   

`;
export default Cart