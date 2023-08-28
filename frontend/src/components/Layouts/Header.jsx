import logo from '../../assets/flipkart-logo.svg'
import plus from '../../assets/flipkart-plus.svg'
import { Link } from 'react-router-dom'
import './Header.css'
import Search from '../../container/Header/Search'
import { CiShop, CiLogout } from 'react-icons/ci'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import OrderSvg from '../../assets/orders.svg'


const Header = () => {

    const user = true;

    return (
        <header className="header">
            <div style={{ display: "flex", flexGrow: 1 }}>
                <div className="header-logo">
                    <Link to={'/'} className="header-logo-main">
                        <img className="header-logo-img" src={logo} alt="Flipkart-Logo" />

                        <div className="header-logo-plus">
                            <span style={{ marginRight: "4px" }}>Explore</span>
                            <span
                                style={{ color: "#ffc200" }}
                            >
                                Plus
                                <img
                                    style={{ width: "10px", marginLeft: "6px" }}
                                    src={plus} alt=""
                                />
                            </span>
                        </div>
                    </Link>
                </div>
                <Search />
            </div>

            <div className="header-menu">
                <div className="header-menu-item">
                    <Link to={'/'}>
                        <CiShop size={24} style={{ marginRight: "8px" }} /> <span>Become a seller</span>
                    </Link>
                </div>
                <div className="header-menu-item sign-up-hover">
                    <Link to={'/login'}>
                        <AiOutlineUser className='hovering-icon' size={24} style={{ marginRight: "8px" }} />
                        <span>
                            Sign in
                        </span>
                    </Link>
                    {/* Hover Menu */}
                    <div className="sign-up-menu">
                        {!user && (
                            <div className="sign-up-opt" style={{ borderBottom: '1px solid #e0e0e0', justifyContent: 'space-between' }}>
                                <span style={{ color: "#000" }}>New Customer?</span>
                                <Link to={'/signup'} style={{ color: '#2874f0' }}>
                                    Sign Up
                                </Link>
                            </div>
                        )}
                        <div className="sign-up-opt">
                            <div className="sign-up-opt-img" style={{ marginRight: '5px' }}><AiOutlineUser size={24} /></div>
                            My Profile
                        </div>
                        <div className="sign-up-opt">
                            <div className="sign-up-opt-img" style={{ marginRight: '5px' }}> <img src={OrderSvg} alt="" /> </div>
                            Orders
                        </div>
                        {user && <div className="sign-up-opt">
                            <div className="sign-up-opt-img" style={{ marginRight: '5px' }}> <CiLogout size={24} /> </div>
                            Logout
                        </div>}
                    </div>
                </div>
                <div className="header-menu-item">
                    <Link to={'/cart'}>
                        <AiOutlineShoppingCart size={24} style={{ marginRight: "8px" }} /> <span>Cart</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header