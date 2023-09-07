import React, { useState } from 'react'
import { styled } from 'styled-components'
import avatar from '../../assets/profile_avatar.svg'

const AdminUserCard = () => {
    const [select, setSelect] = useState("user")
    const selectChange = (e) => {
        setSelect(e.target.value)
    }

    return (
        <div className="admin-user-main">
            <div>
                <div className="adm-user-details">
                    <img src={avatar} alt="" />
                    <div>
                        <span>Sameer Nimje</span>
                        <span>Sameernimje@ecommerce.com</span>
                    </div>
                </div>
                <div className="adm-user-role">
                    <select value={select} onChange={selectChange}>
                        <option>User</option>
                        <option>Admin</option>
                    </select>
                    {select === "Admin" && <button>Save</button>}
                </div>
            </div>
        </div>
    )
}

const Users = () => {
    return (
        <Wrapper>
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 80%;
    padding: 20px 30px;

    &>.admin-user-main{
        width: 43%;
        display: inline-block;
        margin: 10px;
        background: #4b5563;
        padding: 15px;
        border-radius: 10px;
        &>div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;

            &>.adm-user-details{
                display: flex;
                align-items: center;


                &>img{
                    width: 40px;
                    object-fit: contain;
                    height: 40px;
                }

                &>div{
                    display: flex;
                    flex-direction: column;
                    margin-left: 12px;

                    &>:nth-child(2){
                        line-height: 1.5;
                        font-size: 12px;
                        letter-spacing: 1px;
                    }


                   
                }

            }
            /* role option  */
            &>.adm-user-role{
                
                &>select{
                    font-size: 16px;
                    height: 25px;
                    border-radius: 2px;
                    margin-top: 2px;
                }

                &>button{
                    margin-left: 6px;
                    padding: 5px 10px;
                    border-radius: 2px;
                    border: none;
                    font-size: 16px;
                    cursor: pointer;
                }
            }
        }
    }
`
export default Users