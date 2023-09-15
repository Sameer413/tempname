import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import second from '../../assets/iphone.webp'
import { useDispatch, useSelector } from 'react-redux'
import { adminOrder, updateOrderStatus } from '../../redux/features/OrderFeatures/OrderSlic';

const Orders = ({ title, price, status, dispatch, id }) => {
    const [select, setStatus] = useState(status)
    const selectChange = (e) => {
        setStatus(e.target.value)
    }
    const updateStatus = (id, select) => {
        dispatch(updateOrderStatus({ id: id, status: select }))
    }
    return (
        <Wrapper>
            <div className="order-card-main">
                <div className="order-card-detail">

                    <div className="order-card-img">
                        <img src={second} alt="" />
                    </div>
                    <div className="order-card-name">
                        {title}
                    </div>

                </div>

                <div className="order-price">
                    ₹{price}
                </div>

                <div className="order-status">
                    <div className="status-point"></div>
                    <span>{status} </span>
                    <div className="status-info">Your item has been delivered</div>
                </div>
                <div className="update-order">
                    <select value={select} onChange={selectChange}>
                        <option >Shipped</option>
                        <option >Deliverd</option>
                        <option >Cancel</option>
                    </select>
                    <button onClick={() => updateStatus(id, select)}>Update Status</button>
                </div>
            </div>
        </Wrapper>

    )
}

const AdminOrders = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(adminOrder())
    }, []);

    const { orders } = useSelector(state => state.order)


    return (
        <Wrapping>
            {orders && orders.orderDetails.map((order) => (
                <Orders
                    key={order?.id}
                    title={order?.products[0].product.name}
                    price={order?.products[0].product.price}
                    status={order?.status}
                    dispatch={dispatch}
                    id={order?.id}
                />
            ))}
        </Wrapping>
    )
}

const Wrapping = styled.div`
    width: 80%;
    padding: 16px;
`
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
            width: 40%;
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
                font-size: 16px;
                text-decoration: none;
                color: #212121;
                margin-bottom: 10px;
                font-weight: 400;
            }
           
        }

        &>.order-price{
            width: 10.66%;
            font-size: 16px;
        }

        &>.order-status{
            width: 25.33%;
            
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

        &>.update-order{
            display: flex;
            align-items: center;
            
            &>*{
                margin: 0 5px;
                padding: 8px 15px;
                font-size: 16px;
            }

            &>button{
                color: #fff;
                font-weight: 500;
                cursor: pointer;
                border-radius: 5px;
                border: none;
                background: orange;
            }
        }
    }
`;
export default AdminOrders