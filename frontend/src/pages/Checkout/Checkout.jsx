import { useState } from 'react'
import './Checkout.css'
import flipLogo from '../../assets/flip-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createOrder } from '../../redux/features/OrderFeatures/OrderSlic'

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [open, setOpen] = useState(true)

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [pincode, setPincode] = useState('');
    const [state, setState] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [landmark, setLandmark] = useState('')

    const addressData = {
        name: name,
        mobile: Number(number),
        pincode: Number(pincode),
        state: state,
        address: address,
        city: city,
        landmark: landmark
    }

    const productData = JSON.parse(localStorage.getItem('cartProducts'));
    const totalPrice = localStorage.getItem('totalPrice')


    const submitHandler = (e) => {
        e.preventDefault()
        const apiResponse = dispatch(createOrder({ address: addressData, products: productData, totalPrice: totalPrice }));
        console.log(apiResponse.type);
        if (apiResponse.type === "order/createOrder/fulfilled" || undefined) {
            navigate("/")
        }

    }

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
                            <span
                                style={{ marginLeft: "12px", cursor: "pointer", }}
                                onMouseEnter={(e) => e.currentTarget.style.borderBottom = "1px solid #fff"}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderBottom = "none"; // Restore the original margin
                                }}
                                onClick={() => setOpen(!open)}
                            >
                                Edit
                            </span>
                        </div>


                        <form action="">
                            {open && (<>
                                <div className="checkout-form">

                                    <InputField state={name} setState={setName} title={"Name"} name={"name"} />
                                    <InputField state={number} setState={setNumber} title={"10-digit mobile number"} name={"mobile"} />
                                    <InputField state={pincode} setState={setPincode} title={"Pincode"} name={"pincode"} />
                                    <InputField state={state} setState={setState} title={"State"} name={"state"} />

                                    <div className="checkout-form-field" style={{ width: "82.5%" }}>
                                        <input
                                            name='address'
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            type="text"
                                        />
                                        {address === '' && <label>Address</label>}
                                    </div>

                                    <InputField state={city} setState={setCity} title={"City"} name={"city"} />
                                    <InputField state={landmark} setState={setLandmark} title={"Landmark"} name={"landmark"} />

                                </div>
                                <div className="checkout-submit-btn">
                                    <button onClick={() => { setOpen(!open) }}>Save And Deliver Here</button>
                                    <Link to={'/cart'}>cancel</Link>

                                </div>

                            </>)}



                            <div className="checkout-add-heading">
                                Payment
                            </div>
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
                                <button onClick={submitHandler}>Place Order</button>
                                <Link to={'/cart'}>cancel</Link>
                            </div>
                        </form>

                    </div>

                </div>

                {/*  */}
                <div className="checkout-right">
                    <div className="cart-right-heading">Price Details</div>
                    <div className="cart-right-pricing">
                        <span>Price({productData.length + " item"})</span>
                        <span>₹{totalPrice}</span>
                    </div>
                    <div className="cart-right-disc">
                        <span>Discount</span>
                        <span>-₹{totalPrice}</span>
                    </div>
                    <div className="cart-right-delivery">
                        <span>Delivery Charges</span>
                        <span>Free</span>
                    </div>
                    <div className="cart-right-total">
                        <span>Total Ammount</span>
                        <span>₹{totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

const InputField = ({ state, setState, title, name }) => {
    return (
        <div className="checkout-form-field">
            <input
                name={name}
                value={state}
                onChange={(e) => setState(e.target.value)}
                type="text"
            />
            {state === '' && <label>{title}</label>}
        </div>
    )
}

export default Checkout