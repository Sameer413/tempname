import './Login.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { loginUser } from '../../redux/features/UserFeatures/userSlice'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    }



    return (
        <div className="login">
            <div className="login-main">
                <div className="login-left">
                    <span>Login</span>
                    <p>Get access to your Orders, Whishlist and Recommendations</p>
                </div>

                <div className="login-right">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="login-field">
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            {/* <span></span> */}
                            <label>Email</label>
                        </div>
                        <div className="login-field">
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
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
                            <button>Login</button>
                        </div>
                    </form>

                    <div><Link to={'/signup'} style={{ color: " #2874f0" }}>New to Ecommerce? Create an account</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Login