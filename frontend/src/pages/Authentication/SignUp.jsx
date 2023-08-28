import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const SignUp = () => {
    return (
        <div className="login">
            <div className="login-main">
                <div className="login-left">
                    <span>Looks like you're new here!</span>
                    <p>Sign up with your mobile number to get started</p>
                </div>

                <div className="login-right">
                    <form action="">
                        <div className="login-field">
                            <input type="email" />
                            {/* <span></span> */}
                            <label>Email</label>
                        </div>
                        <div className="login-field">
                            <input type="password" />
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
                            <button type='submit'>Login</button>
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