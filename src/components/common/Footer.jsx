// Packages
import React from "react"
import { NavLink, useNavigate } from 'react-router-dom'

//Styling
import footerStyles from '../../styles/Footer.module.sass'

//import AppLogo from "../../icons/AppLogo"
import appLogo from '../../images/logo.svg'
import instagramLogo from '../../images/instagram.svg'
import whatsappLogo from '../../images/whatsapp.svg'
import facebookLogo from '../../images/facebook.svg'
import twitterLogo from '../../images/twitter.svg'

const Footer = () => {
    const navigate = useNavigate()
    // Constants
    const socialMedia = [
        {
            id: 0,
            title: 'Instagram',
            url: 'https://www.instagram.com/bellmonteindustriespvtltd/',
            icon: instagramLogo,
        },
        {
            id: 1,
            title: 'Facebook',
            url: 'https://www.facebook.com/people/Bellmonte-Industries-Private-Limited/61555243996831/?is_tour_dismissed=true',
            icon: facebookLogo,
        },
        {
            id: 2,
            title: 'Twitter',
            url: 'https://twitter.com/BellmontePvtLtd',
            icon: twitterLogo,
        },
        {
            id: 3,
            title: '+91 9850344666',
            url: '',
            icon: whatsappLogo,
        },
    ]
    const navigationMenu = [
        {
            url: '/',
            title: 'Home'
        },
        {
            url: '/about',
            title: 'About'
        },
        {
            url: '/services',
            title: 'Services'
        },
        {
            url: '',
            title: 'Contact'
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
            title: 'Solution for Container/ Box'
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
        
       
    ]

    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.col}>
                {/* <div className={footerStyles.logo}>
                    <img src={appLogo} alt='Bellmonte'/>
                    <div>
                        Reefer Vehicle <br/>
                        <span>Powered By Bellmonte</span>
                    </div>
                </div> */}
                <h3>Social Media</h3>
                {socialMedia.map((menuItem, index) => (
                    <div className={footerStyles.socialMedia}>
                    <img src={menuItem.icon} alt='social icon'/>
                    <a className={`borderlessBtn`} key={menuItem.id} href={menuItem.url} target="_blank"> 
                        {menuItem.title}
                    </a>
                    </div>
                )
                    
                )}
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
                        <div className='borderlessBtn' onClick={()=>{navigate(`${menuItem.url}`, {state: {tabToOpen: menuItem.id}})}}>{menuItem.title}</div>
                    // </NavLink>
                )}
            </div>
            <div className={footerStyles.col}>
                <h3>Quick Contact</h3>
                <p> If you have any questions or need help, 
                    feel free to contact with our team.
                </p>
                <a href="#" className={footerStyles.contact}>+919850344666</a>
                <a href="#" className={footerStyles.contact}>1110, Plot No. E, 3A, Sector 12, Kharghar, Navi Mumbai, Maharashtra 410210</a>
            </div>
        </div>
    )
}

export default Footer