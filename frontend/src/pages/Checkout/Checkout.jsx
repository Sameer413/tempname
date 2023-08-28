import { useState } from 'react'
import './Checkout.css'
import flipLogo from '../../assets/flip-logo.png'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className="checkout">
            <header className="checkout-header">
                <div className="checkout-h-logo">
                    <img src={flipLogo} alt="" />
                    <div>Explore <span>Plus</span></div>
                </div>
            </header>

            <div className="checkout-main">
                <div className="checkout-left">
                    <div className="checkout-address">
                        <div className="checkout-add-heading">
                            Delivery Address
                        </div>

                        {open && (
                            <form action="">
                                <div className="checkout-form">

                                    <div className="checkout-form-field">
                                        <input type="text" />
                                        <label>Name</label>
                                    </div>
                                    <div className="checkout-form-field">
                                        <input type="text" />
                                        <label>10-digit mobile number</label>
                                    </div>
                                    <div className="checkout-form-field">
                                        <input type="text" />
                                        <label>Pincode</label>
                                    </div>
                                    <div className="checkout-form-field">
                                        <input type="text" />
                                        <label>state</label>
                                    </div>
                                    <div className="checkout-form-field" style={{ width: "82.5%" }}>
                                        <input type="text" />
                                        <label>Address</label>
                                    </div>
                                    <div className="checkout-form-field">
                                        <input type="text" />
                                        <label>City</label>
                                    </div>
                                    <div className="checkout-form-field">
                                        <input type="text" />
                                        <label>Landmark</label>
                                    </div>
                                </div>
                                <div className="checkout-submit-btn">
                                    <button onClick={() => { setOpen(!open) }}>Save And Deliver Here</button>
                                    <Link to={'/cart'}>cancel</Link>

                                </div>
                            </form>
                        )}
                    </div>

                    {/*  */}
                    <div className="checkout-address">
                        <div className="checkout-add-heading">
                            Payment
                        </div>

                        <form action="">
                            <div className="checkout-form">

                                <div className="checkout-payment-opt">
                                    <input type="radio" />
                                    <label htmlFor="">UPI</label>
                                </div>
                                <div className="checkout-payment-opt">
                                    <input type="radio" />
                                    <label htmlFor="">Cash On Delivery</label>
                                </div>

                            </div>
                            <div className="checkout-submit-btn">
                                <button>Place Order</button>
                                <Link to={'/cart'}>cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>

                {/*  */}
                <div className="checkout-right">
                    <div className="cart-right-heading">Price Details</div>
                    <div className="cart-right-pricing">
                        <span>Price(3 item)</span>
                        <span>₹59,999</span>
                    </div>
                    <div className="cart-right-disc">
                        <span>Discount</span>
                        <span>-₹59,999</span>
                    </div>
                    <div className="cart-right-delivery">
                        <span>Delivery Charges</span>
                        <span>Free</span>
                    </div>
                    <div className="cart-right-total">
                        <span>Total Ammount</span>
                        <span>₹59,999</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Checkout