// Styles:
import contactStyles from '../styles/Contact.module.sass'

//Icons
import { FaPhone, FaEnvelopeCircleCheck, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return <div>
        <h2>Contact</h2>
        <div className={contactStyles.contactWrapper}>
            <h3>Quick Contact</h3>
            <p> If you have any questions or need help, 
                feel free to contact with our team.
            </p>
            <div className={contactStyles.contactItem}>
                <FaPhone style={{width:'18px', height:'18px'}}/>
                <a href="#" className={contactStyles.contact}>+919850344666</a>
            </div>
            <div className={contactStyles.contactItem}>
                <FaLocationDot style={{width:'18px', height:'18px'}}/>
                <a href="#" className={contactStyles.contact}>1110, Plot No. E, 3A, Sector 12, Kharghar, Navi Mumbai, Maharashtra 410210</a>
            </div>
            <div className={contactStyles.contactItem}>
                <FaEnvelopeCircleCheck style={{width:'20px', height:'18px'}}/>
                <a href="#" className={contactStyles.contact}>support@reefervehicle.com</a>
            </div>
        </div>
    </div>
}

export default Contact