import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import avatar from '../../assets/profile_avatar.svg'
import { useDispatch, useSelector } from 'react-redux'
import { allusers, updateRole } from '../../redux/features/AdminFeatures/AdminSlice'

const AdminUserCard = ({ name, email, role, id, dispatch }) => {
    const [select, setSelect] = useState(role)
    const selectChange = (e) => {
        setSelect(e.target.value)
    }

    const submitHandler = (role) => {
        dispatch(updateRole({ role: role, user: id }));
    }

    return (
        <div className="admin-user-main">
            <div>
                <div className="adm-user-details">
                    <img src={avatar} alt="" />
                    <div>
                        <span>{name}</span>
                        <span>{email ? email : ""}</span>
                    </div>
                </div>
                <div className="adm-user-role">
                    <select value={select} onChange={selectChange}>
                        <option>{role}</option>
                        <option>{role === "user" ? "admin" : "user"}</option>
                    </select>
                    {select === (role === "admin" ? "user" : "admin") && <button onClick={() => submitHandler(select)}>Save</button>}
                </div>
            </div>
        </div>
    )
}

const Users = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(allusers())
    }, []);


    return (
        <Wrapper>
            {users?.users?.map((user) => (
                <AdminUserCard
                    key={user?._id}
                    name={user?.firstName + " " + user?.lastName}
                    email={user?.email}
                    role={user?.role}
                    id={user?._id}
                    dispatch={dispatch}
                />
            ))}
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