import { BsFillStarFill } from 'react-icons/bs'
import './ProdDetail_Info.css'



const ProdDetail_Info = ({ name, ratings, reviews, price, description }) => {
    return (
        <div className="ProdDetail_Info">
            <div className="prod-detail-main">
                <div className="prod-info">
                    <div className="prod-title">
                        <span>{name}</span>
                    </div>
                    <div className="prod-rating">
                        <span
                            style={{
                                background: "#388e3c",
                                color: "#fff",
                                borderRadius: "3px",
                                padding: "2px 4px 2px 6px",

                            }}>
                            3.4 <BsFillStarFill size={10} color='white' />
                        </span>
                        <span style={{ color: "#878787", paddingLeft: "6px", fontSize: "14px" }}>
                            {ratings?.length} Ratings & {reviews?.length} Reviews
                        </span>
                    </div>
                    <div className="prod-prices">
                        <div className="prod-price">
                            ₹{discountPrice(price)}
                        </div>
                        <div className="prod-original-price">
                            ₹{price}
                        </div>
                        <div className="prod-discount">
                            36% off
                        </div>
                    </div>
                </div>
                <div className="prod-offers">
                    <div className="prod-offers-title">
                        Available Offers
                    </div>
                    <div className="offer-list">
                        <span className="offer">
                            <img src="/assets/tag.webp" alt="" />
                            <li>
                                <span style={{ fontWeight: 600, paddingRight: "4px", }}>Bank Offer</span>
                                <span style={{ fontSize: "14px" }}>
                                    Flat ₹1,000 off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹49,999
                                </span>
                            </li>
                        </span>
                        <span className="offer">
                            <img src="/assets/tag.webp" alt="" />
                            <li>
                                <span style={{ fontWeight: 600, paddingRight: "4px", }}>Bank Offer</span>
                                <span style={{ fontSize: "14px" }}>
                                    Flat ₹1,000 off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹49,999
                                </span>
                            </li>
                        </span>
                        <span className="offer">
                            <img src="/assets/tag.webp" alt="" />
                            <li>
                                <span style={{ fontWeight: 600, paddingRight: "4px", }}>Bank Offer</span>
                                <span style={{ fontSize: "14px" }}>
                                    Flat ₹1,000 off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹49,999
                                </span>
                            </li>
                        </span>
                        <span className="offer">
                            <img src="/assets/tag.webp" alt="" />
                            <li>
                                <span style={{ fontWeight: 600, paddingRight: "4px", }}>Bank Offer</span>
                                <span style={{ fontSize: "14px" }}>
                                    Flat ₹1,000 off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹49,999
                                </span>
                            </li>
                        </span>
                    </div>
                </div>
                <div className="prod-more-details">
                    <div className="prod-more-main">
                        <div className="more-detail-title">Delivery</div>
                        <div className="more-detail-info" style={{ fontWeight: 500 }}>
                            Delivery by 26 Aug, Saturday
                        </div>
                    </div>

                    <div className="prod-more-main">
                        <div className="more-detail-title">Seller</div>
                        <div className="more-detail-info" style={{ fontWeight: 500 }}>
                            Developers Community Pvt Ltd.
                        </div>
                    </div>
                    <div className="prod-more-main">
                        <div className="more-detail-title">Description</div>
                        <p className="more-detail-info" style={{ fontWeight: 500 }}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdDetail_Info


const discountPrice = (initialPrice) => {
    return Math.floor(initialPrice - ((36 / 100) * initialPrice));
}