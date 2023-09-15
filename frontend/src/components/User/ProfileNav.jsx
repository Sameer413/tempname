// import React from 'react'
import { styled } from 'styled-components'
import profileAvatar from '../../assets/profile_avatar.svg'
import { BsBoxFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { IoMdWallet } from 'react-icons/io'
import { Link } from 'react-router-dom'


const ProfileNav = () => {
    return (
        <Wrapper>
            <div className="profile-nav-top">
                <div className="profile-nav-profile">
                    <img src={profileAvatar} alt="" />
                    <div>Hello</div>
                </div>
            </div>
            {/*  */}
            <div className="profile-nav-main">
                <div className="profile-nav-orders">
                    <BsBoxFill color='#2874f0' size={20} />
                    <Link to={'/myorders'}>My Orders</Link>
                </div>
                {/*  */}
                <div className="profile-navigation">
                    <div className="profile-navigation-heading">
                        <FaUserAlt color='#2874f0' size={20} /> <span>Account Settings</span>
                    </div>
                    {/*  */}
                    <div className="profile-navigation-opt">
                        <div>Profile Information</div>
                        <div>Manage Addresses</div>
                        <div>Pan Card Information</div>
                    </div>
                </div>
                {/*  */}
                <div className="profile-navigation">
                    <div className="profile-navigation-heading">
                        <IoMdWallet color='#2874f0' size={20} /> <span>Payments</span>
                    </div>
                    {/*  */}
                    <div className="profile-navigation-opt">
                        <div>Saved UPI</div>
                        <div>Saved Card</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}






const Wrapper = styled.div`
    width: 25%;

    &>.profile-nav-top{
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.08);

        &>.profile-nav-profile{
            padding: 12px;
            margin-bottom: 18px;
            width: 100%;
            display: flex;
            align-items: center;
            &>img{
                aspect-ratio: auto 50/50;
                vertical-align: middle;
                width: 50px;
                height: 50px;
            }

            &>div{
                padding: 5px 0 0 16px;
                width: calc(100% - 50px);
                font-size: 16px;
                font-weight: 500;
                align-items: center;
            }
        }
    }



    &>.profile-nav-main{
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.08);


        &>.profile-nav-orders{
            padding-bottom: 12px;
            padding: 20px 12px 20px 24px;
            width: 100%;
            display: flex;
            align-items: center;
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .16);

            &>a{
                width: calc(100% - 26px);
                padding-left: 20px;
                font-size: 16px;
                font-weight: 500;
                color: #878787;
                cursor: pointer;
            }
        }



        &>.profile-navigation{
            padding-bottom: 12px;

            &>.profile-navigation-heading{
                    padding: 20px 12px 5px 24px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    cursor: default;
                    user-select: none;

                    &>span{
                        padding: 0 20px;
                        font-size: 16px;
                        font-weight: 500;
                        color: #878787;
                        text-transform: uppercase;
                    }
                }

                &>.profile-navigation-opt{
                    margin-top: 10px;

                    &>*{
                        font-size: 14px;
                        padding: 10px 5px 10px 66px;
                        margin: 8px 0;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;

export default ProfileNav