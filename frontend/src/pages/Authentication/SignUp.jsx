import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/features/UserFeatures/userSlice'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const apiResponse = await dispatch(registerUser({ firstName, lastName, email, password }));
        if (apiResponse.type === "user/registerUser/fulfilled") {
            navigate("/")
        }
    }


    return (
        <div className="login">
            <div className="login-main">
                <div className="login-left">
                    <span>Looks like you're new here!</span>
                    <p>Sign up with your mobile number to get started</p>
                </div>

                <div className="login-right">
                    <form action="" onSubmit={submitHandler}>
                        <div className="login-field">
                            <input
                                name='firstName'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text" />
                            {/* <span></span> */}
                            <label>First Name</label>
                        </div>
                        <div className="login-field">
                            <input
                                name='lastName'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type="text" />
                            {/* <span></span> */}
                            <label>Last Name</label>
                        </div>
                        <div className="login-field">
                            <input
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" />
                            {/* <span></span> */}
                            <label>Email</label>
                        </div>
                        <div className="login-field">
                            <input
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" />
                            {/* <span></span> */}
                            <label>Password</label>
                        </div>


                        <div className="auth-text">
                            By continuing, you agree to Ecommerce's
                            <span> Terms of Use </span>
                            and
                            <span> Privacy Policy</span>
                        </div>
                        <div className="login-btn">
                            <button type='submit'>Sign Up</button>
                        </div>
                        <div className="login-btn" >
                            <Link to={"/login"} style={{ background: "#fff", color: "#2874f0" }}>
                                Existing User? Log in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default SignUp