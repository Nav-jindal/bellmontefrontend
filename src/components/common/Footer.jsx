// Packages
import React from "react"
import { NavLink } from 'react-router-dom'

//Styling
import footerStyles from '../../styles/Footer.module.sass'

//Component
import AppLogo from "../../icons/AppLogo"

const Footer = () => {
    // Constants
    const socialMedia = [
        {
            id: 0,
            title: 'Instagram',
            url: 'https://www.instagram.com/bellmonteindustriespvtltd/',
        },
        {
            id: 1,
            title: 'Facebook',
            url: 'https://www.facebook.com/profile.php?id=61555263315511',
        },
        {
            id: 2,
            title: 'Twitter',
            url: 'https://twitter.com/BellmontePvtLtd',
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
            url: '/',
            title: 'Contact'
        },
        {
            url: '/requestaquote',
            title: 'Request a quote'
        },
    ]
    const servicesMenu = [
        {
            url: '/services',
            title: 'Solution for Truck Chassis'
        },
        {
            url: '/services',
            title: 'Solution for Container/ Box'
        },
        {
            url: '/services',
            title: 'Solution for Truck Financing'
        },
        {
            url: '/services',
            title: 'Solution for Truck Subsidy'
        },
        {
            url: '/services',
            title: 'Solution for Reefer Unit'
        },
    ]

    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.col}>
                <div className={footerStyles.logo}>
                    <AppLogo height={40} width={40}/>
                    Bellmonte
                </div>
                {socialMedia.map((menuItem, index) => 
                    <a className='borderlessBtn' key={menuItem.id} href={menuItem.url} target="_blank">{menuItem.title}</a>
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
                    <NavLink key={index} to={menuItem.url}>
                        <div className='borderlessBtn'>{menuItem.title}</div>
                    </NavLink>
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