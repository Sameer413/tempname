// import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { styled } from 'styled-components'
import MyOrdersCard from '../../container/Products/MyOrdersCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { userOrder } from '../../redux/features/OrderFeatures/OrderSlic'

const MyOrders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userOrder())
    }, []);

    const { orders } = useSelector(state => state.order)

    return (
        <Wrapper>
            <div className="">
                <div className="my-orders-search">
                    <div className="orders-search-input">
                        <input type="text" placeholder='Search your order here' />
                    </div>
                    <button> <BsSearch size={16} /> <span>Search Orders</span></button>
                </div>
                {/*  */}
                <div className="my-orders-list">
                    {orders && orders.orderDetails.map((order) => (
                        <MyOrdersCard
                            key={order?.id}
                            prodName={order?.products[0].product.name}
                            price={order?.products[0].product.price}
                            status={order?.status}
                        />
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    min-width: 978px;
    max-width: 1680px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    background: #f1f3f6;

    &>div{
        margin: 16px auto;
        position: relative;
        padding: 0 16px;
        /* width: calc(100% - 250px); */
        width: 85%;

        &>.my-orders-search{
            display: flex;
            margin-right: 10%;
            margin-bottom: 16px;
            border-radius: 4px 0 0 4px;

            &>.orders-search-input{
                position: relative;
                flex: 1;

                &>input{
                    height: 40px;
                    width: 100%;
                    border: 1px solid #dbdbdb;
                    padding: 8px;
                    border-radius: 4px 0 0 4px;
                    font-size: 14px;
                }
            }

            &>button{
                background: #2874f0;
                color: #fff;
                box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
                border: none;
                display: flex;
                align-items: center;
                font-weight: 600;
                outline: none;
                padding: 10px 20px;
                font-size: 13px;
                vertical-align: super;
                border-radius: 2px;

                &>span{
                    margin-left: 6px;
                }
            }
        }
    }
`
export default MyOrders