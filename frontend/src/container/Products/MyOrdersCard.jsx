// import React from 'react'

import { styled } from "styled-components"
import second from '../../assets/iphone.webp'

const MyOrdersCard = () => {
    return (
        <Wrapper>
            <div className="order-card-main">
                <div className="order-card-detail">

                    <div className="order-card-img">
                        <img src={second} alt="" />
                    </div>
                    <div className="order-card-name">
                        APPLE iPhone 11 (64 GB, White)
                    </div>

                </div>

                <div className="order-price">
                    ₹449
                </div>

                <div className="order-status">
                    <div className="status-point"></div>
                    <span>Delivered on Aug 12</span>
                    <div className="status-info">Your item has been delivered</div>
                </div>
            </div>
        </Wrapper>

    )
}

const Wrapper = styled.div`
    padding: 16px;
    width: 100%;
    font-size: 14px;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    position: relative;
    cursor: pointer;
    display: block;
    box-shadow: 0 0 0 0 rgba(0,0,0,.15);
    margin-bottom: 8px;
    border-radius: 4px;

    
    &>.order-card-main{
        width: 100%;
        display: flex;

        &>.order-card-detail{
            width: 50%;
            display: flex;

            
            &>.order-card-img{
                width: 25%;
                
                &>img{
                    height: 75px;
                    width: 75%;
                    object-fit: contain;
                    margin: 0 auto;
                }
            }

            &>.order-card-name{
                width: 66.66%;
                box-shadow: none;
                padding: 0;
                border: none;
                font-size: 14px;
                text-decoration: none;
                color: #212121;
                margin-bottom: 10px;
                font-weight: 400;
            }
           
        }

        &>.order-price{
            width: 16.66%;
        }

        &>.order-status{
            width: 33.33%;
            
            &>.status-point{
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #26a541;
                display: inline-block;
                margin-right: 8px;
            }

            &>span{
                font-size: 14px;
                font-weight: 500;
            }
            
            &>.status-info{
                margin-top: 8px;
                font-size: 12px;
            }
        }
    }
`;

export default MyOrdersCard