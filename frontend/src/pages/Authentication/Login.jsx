import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { loginUser } from '../../redux/features/UserFeatures/userSlice'
import Loader from '../../components/Layouts/Loader'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const intendedRedirection = location.state ? location.state.from : "/"
    const { loading } = useSelector(state => state.user)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiResponse = await dispatch(loginUser({ email, password }));
        if (apiResponse.type === "user/loginUser/fulfilled") {
            // navigate('/')
            navigate(intendedRedirection)
        }
    }

    useEffect(() => {
        // Store the intended redirection path in local storage
        localStorage.setItem("intendedRedirection", JSON.stringify(intendedRedirection));
    }, [intendedRedirection]);

    return (
        <div className="login">
            <div className="login-main">
                <div className="login-left">
                    <span>Login</span>
                    <p>Get access to your Orders, Whishlist and Recommendations</p>
                </div>

                {loading ? (
                    <Loader />
                ) : (
                    <div className="login-right">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="login-field">
                                <input
                                    name='email'
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                {/* <span></span> */}
                                <label>Email</label>
                            </div>
                            <div className="login-field">
                                <input
                                    name='password'
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
                            <div className='login-btn' onClick={() => {
                                setEmail("user@gmai.com")
                                setPassword("password")
                                handleSubmit
                            }}>
                                <button>Demo Mode</button>
                            </div>
                        </form>

                        <div><Link to={'/signup'} style={{ color: " #2874f0" }}>New to Ecommerce? Create an account</Link></div>
                    </div>
                )

                }
            </div>
        </div>
    )
}

export default Login