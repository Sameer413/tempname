// import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import avatar from '../../assets/profile_avatar.svg'
import { VscGraphLine } from 'react-icons/vsc'
import { BsBagCheckFill, BsFillBoxFill } from 'react-icons/bs'
import { AiFillPlusSquare } from 'react-icons/ai'
import { HiUsers } from 'react-icons/hi'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/features/UserFeatures/userSlice'

const AdminMain = () => {

    // const navigate = useNavigate()
    const dispatch = useDispatch();

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
    }
    return (
        <Wrapper>
            <div className="admin-navbar">
                <div className="admin-navbar-profile">
                    <div className="admin-profile-img">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="admin-name-email">
                        <span>user user</span>
                        <div>user@gmail.com</div>
                    </div>
                </div>

                <div className="admin-nav-menu">
                    <Link to={"/admin"} className="admin-nav-options">
                        <VscGraphLine size={24} /> <span>Dashboard</span>
                    </Link>
                    <Link to={"/admin/orders"} className="admin-nav-options">
                        <BsBagCheckFill size={24} /> <span>Orders</span>
                    </Link>
                    <Link to={"/admin/products"} className="admin-nav-options" >
                        <BsFillBoxFill size={24} /> <span>Products</span>
                    </Link>
                    <Link to={"/admin/addproduct"} className="admin-nav-options">
                        <AiFillPlusSquare size={24} /> <span>Add Product</span>
                    </Link>
                    <Link to={"/admin/users"} className="admin-nav-options">
                        <HiUsers size={24} /> <span>Users</span>
                    </Link>
                    <Link className="admin-nav-options" onClick={logoutHandler}>
                        <RiLogoutBoxLine size={24} /> <span>Logout</span>
                    </Link>
                </div>

                <div className="admin-text">
                    <span style={{ fontSize: "20px", color: "#e3e4e5" }}>Developed with ❤️ by:</span>
                    <span style={{ fontSize: "24px" }}>Sameer Nimje</span>
                    <span>sameernimje29@outlook.com</span>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width: 20%;
    position: sticky;
    top: 0;

    &>.admin-navbar{
        height: 100%;
        width: 100%;
        background: #1f2937;
        border-right: 5px solid #4b5563;
        padding: 20px 10px;
        color: #fff;
        position: relative;


        &>.admin-navbar-profile{
            display: flex;
            align-items: center;
            padding: 10px 12px;
            background: #4b5563;
            border-radius: 12px;

            &>.admin-profile-img{
                margin-right: 16px;
            }

            &>.admin-name-email{
                &>span{
                    font-size: 20px;
                }

                &>div{
                    margin-top: 4px;
                    font-size: 14px;
                    letter-spacing: 1px;
                    color: #8e939e;
                }
            }

        }

        &>.admin-nav-menu{
            width: 100%;
            margin-top: 30px;

            &>*{
                display: flex;
                align-items: center;
                font-size: 18px;
                color: #fff;
                margin: 12px 0;
                padding: 10px 5px;

                &>span{
                    margin-left: 16px;
                    font-weight: 600;
                    letter-spacing: 1px;
                }
            }
        }

        &>.admin-text{
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            margin-top: 20px;
            background-color: #4b5563;
            padding: 10px;
            border-radius: 10px;
            &>*{
                padding: 2px;
                letter-spacing: 1px;
            }
        }


    }
`
export default AdminMain