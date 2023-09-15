import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { updateProfile, updatePassword } from '../../redux/features/UserFeatures/userSlice';

const ProfileSection = () => {
    const [firstName, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const dispatch = useDispatch();

    const updateHandler = async (e) => {
        e.preventDefault();
        const apiResponse = await dispatch(updateProfile({ firstName: firstName, lastName: lastName }))
        if (apiResponse.type === "user/update/fulfilled") {
            window.location.reload();
        }
    }

    const updatePassHandler = async (e) => {
        e.preventDefault()
        const apiResponse = await dispatch(updatePassword({ oldPassword: currentPassword, newPassword: newPassword, confirmPassword: confirmPassword }))
        if (apiResponse.type === "user/updatePassword/fulfilled") {
            window.location.reload();
        }

    }
    return (
        <Wrapper>
            <div>
                {/* pl = personal information */}
                <div className="profile-sec-pl">
                    <div className="pl-heading">
                        Personal Information <span>Edit</span>
                    </div>
                    <form action="" onSubmit={updateHandler}>
                        <div className="pl-field-box">
                            <div>
                                <input
                                    name='firstName'
                                    value={firstName}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='First Name'
                                    type="text"
                                />
                            </div>
                            <div>
                                <input
                                    name='lastName'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder='Last Name'
                                    type="text"
                                />
                            </div>
                            <button type='submit'>Save</button>
                        </div>
                    </form>
                </div>
                {/* section */}
                <div className="profile-sec-pl" >
                    <div className="pl-heading">
                        Email Address <span>Edit</span>
                    </div>
                    <form action="">
                        <div className="pl-field-box">
                            <div>
                                <input
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                />
                            </div>
                            <button onClick={(e) => { e.preventDefault(); dispatch(updateProfile({ email: email })) }}>Save</button>
                        </div>
                    </form>
                </div>
                <div className="profile-sec-pl" >
                    <div className="pl-heading">
                        Change Password <span>Edit</span>
                    </div>
                    <form action="" onSubmit={updatePassHandler}>
                        <div className="pl-field-box">
                            <div>
                                <input
                                    name="oldPassword"
                                    placeholder='current Password'
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    type="password"
                                />
                            </div>
                            <div>
                                <input
                                    name="newPassword"
                                    placeholder='new Password'
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    type="password"
                                />
                            </div>
                            <div>
                                <input
                                    name="confirmPassword"
                                    placeholder='confirm Password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    type="password"
                                />
                            </div>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 75%;
    padding-left: 16px;

    &>div{
        padding: 24px 32px 0;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.08);

        &>.profile-sec-pl{
            width: 100%;
            padding-bottom: 24px;

            &>.pl-heading{
                padding-bottom: 24px;
                cursor: default;

                &>span{
                    margin-left: 24px;
                    color: #2874f0;
                    cursor: pointer;

                }
            }

            &>form>.pl-field-box{
                width: 100%;
                display: flex;

                &>*{
                    width: 270px;
                    padding-right: 12px;
                    margin-bottom: 10px;

                    &>input{
                        padding: 16px;
                        height: 50px;
                        width: 100%;
                        font-size: 14px;
                        border: 1px solid #e0e0e0;
                        outline: none;
                        border-radius: 2px;
                        background-color: #fafafa;
                    }
                }

                &>button{
                    background: #2874f0;
                    width: 130px;
                    height: 48px;
                    padding: 14px;
                    color: #fff;
                    border-radius: 3px;
                    font-size: 16px;
                    box-shadow: none;
                    border: none;
                }
            }
        }

    }
`
export default ProfileSection