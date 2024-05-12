// Packages
import React from "react"
import { NavLink, useNavigate } from 'react-router-dom'

//Styling & Icons
import footerStyles from '../../styles/Footer.module.sass'
import twitterIcon from '../../images/twitter.svg'
import facebookIcon from '../../images/facebook.svg'
import whatsappIcon from '../../images/whatsapp.svg'
import instagramIcon from '../../images/instagram.svg'
import { 
    FaPhone, 
    FaEnvelopeCircleCheck, 
    FaLocationDot  
} from "react-icons/fa6";

const Footer = () => {
    // Constants
    const navigate = useNavigate()
    const socialMedia = [
        {
            id: 0,
            title: 'Instagram',
            url: 'https://www.instagram.com/bellmonteindustriespvtltd/',
            icon: instagramIcon,
        },
        {
            id: 1,
            title: 'Facebook',
            url: 'https://www.facebook.com/people/Bellmonte-Industries-Private-Limited/61555243996831/?is_tour_dismissed=true',
            icon: facebookIcon,
        },
        {
            id: 2,
            title: 'Twitter',
            url: 'https://twitter.com/BellmontePvtLtd',
            icon: twitterIcon,
        },
        {
            id: 3,
            title: '+91 9850344666',
            url: 'http://wa.link/logmk9',
            icon: whatsappIcon,
        },
    ]
    const navigationMenu = [
        {
            url: '/',
            title: 'Home'
        },
        {
            url: '/about',
            title: 'About us'
        },
        {
            url: '/services',
            title: 'Services'
        },
        {
            url: '/contact',
            title: 'Contact us'
        },
        {
            url: '/requestaquote',
            title: 'Request a quote'
        },
    ]
    const servicesMenu = [
        {
            id: 0,
            url: '/services',
            title: 'Solution for Truck Chassis'
        },
        {
            id: 1,
            url: '/services',
            title: 'Solution for Reefer Container/ Box'
        },
        {
            id: 2,
            url: '/services',
            title: 'Solution for Reefer Unit'
        },
        {
            id: 3,
            url: '/services',
            title: 'Solution for Reefer Truck Subsidy'
        },
        {
            id: 4,
            url: '/services',
            title: 'Solution for Reefer Truck Financing'
        },
        {
            id: 5,
            url: '/services',
            title: 'Solution for Commercial Vehicle /Truck Financing'
        },
        
       
    ]

    return (
        <div className={footerStyles.footerBackgroundColor}>
        <div className={footerStyles.footer}>
            <div className={footerStyles.col}>
                <h3>Social Media</h3>
                {socialMedia.map((menuItem, index) => (
                    <div className={footerStyles.socialMedia} key={index}>
                        <img src={menuItem.icon} alt={menuItem.title} />
                        <a  className={`borderlessBtn`} 
                            key={menuItem.id} href={menuItem.url} 
                            target="_blank"
                            rel="noreferrer"
                            > 
                            {menuItem.title}
                        </a>
                    </div>
                ))}
            </div>
            <div className={footerStyles.col}>
                <h3>Navigation</h3>
                <div>
                    {navigationMenu.map((menuItem, index) => 
                        <NavLink key={index} to={menuItem.url}>
                            <div className='borderlessBtn'>{menuItem.title}</div>
                        </NavLink>
                    )}
                </div>
            </div>
            <div className={footerStyles.col}>
                <h3>Services</h3>
                {servicesMenu.map((menuItem, index) => 
                    // <NavLink key={index} to={menuItem.url}>
                        <div className='borderlessBtn' key ={index} onClick={()=>{navigate(`${menuItem.url}`, {state: {tabToOpen: menuItem.id}})}}>{menuItem.title}</div>
                    // </NavLink>
                )}
            </div>
            <div className={footerStyles.col}>
                <h3>Quick Contact</h3>
                <p> If you have any questions or need help, 
                    feel free to contact with our team.
                </p>
                <div className={footerStyles.contactItem}>
                    <FaPhone style={{width:'18px', height:'18px'}}/>
                    <a href="tel:+9102235123293" className={footerStyles.contact}>022 3512 3293,</a>
                    <a href="tel:+9102235128536" className={footerStyles.contact}>022 3512 8536</a>
                </div>
                <div className={footerStyles.contactItem}>
                    <FaLocationDot style={{width:'18px', height:'18px'}}/>
                    <a 
                        href="https://www.google.com/maps/search/Goodwill+Infinity,1110,11th+Floor,Plot+No+E,3A,Sector-12,Kharghar,+Navi+Mumbai,+Maharashtra+410210,+India/@19.0393,73.064,17z?hl=en&entry=ttu" 
                        className={footerStyles.contact}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Goodwill Infinity 1110, Plot No. E, 3A, Sector 12, Kharghar, Navi Mumbai, Maharashtra 410210
                    </a>
                </div>
                <div className={footerStyles.contactItem}>
                    <FaEnvelopeCircleCheck style={{width:'20px', height:'18px'}}/>
                    <a href="mailto:support@reefervehicle.com" className={footerStyles.contact}>support@reefervehicle.com</a>
                </div>
            </div>
        </div>
        <div className={footerStyles.copyright}>
            Copyright © Bellmonte Industries Pvt Ltd. All rights reserved
        </div>
        </div>
    )
}

export default Footer