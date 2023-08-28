import { footerData, footerDataInfo } from '../../../data'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">

                {footerData.map((item, i) => {
                    return (
                        <FooterOptions key={i} title={item.title} data={item.data} />
                    )
                })}

                <div className="footer-items footer-break" >
                    <div className="footer-items-title">
                        {footerDataInfo.MailUs.title}
                    </div>
                    {footerDataInfo.MailUs.data.map((item, i) => (
                        <div key={i} className="footer-items-links">
                            {item}
                        </div>
                    ))}
                </div>
                <div className="footer-items " >
                    <div className="footer-items-title">
                        {footerDataInfo.Address.title}
                    </div>
                    {footerDataInfo.MailUs.data.map((item, i) => (
                        <div key={i} className="footer-items-links">
                            {item}
                        </div>
                    ))}
                    <span className="footer-items-links" >telephone : <span style={{ color: '#2874f0' }}>{footerDataInfo.Address.tel}</span> </span>
                </div>
            </div>



            <div className="footer-down">
                {footerDataInfo.footerDown.map((item) => (
                    <div key={item.title ? item.title : item.img} className="footer-down-item">
                        {item.img && <img src={item.img} alt="" />}
                        {item.title && <span>{item.title}</span>}
                    </div>
                ))}
                <div className="footer-down-item">
                    <img src="/assets/payments.svg" style={{ width: "auto" }} alt="" />
                </div>
            </div>
        </footer>
    )
}


const FooterOptions = ({ title, data }) => {
    return (
        <div className="footer-items" >
            <div className="footer-items-title">
                {title}
            </div>
            {data.map((item, i) => (
                <div key={i} className="footer-items-links">
                    {item}
                </div>
            ))}
        </div>
    );
}
export default Footer