// Packages
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

// Images & Styling
import appLogo from '../../images/logo.svg'
import logoName from '../../images/logo-full-name.png'
import navStyle from '../../styles/Navbar.module.sass'

// Components
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {

    // States
    const [toggleMobileNavOverlay, setToggleMobileNavOverlay] = useState(false)

    return <>
        <nav className={navStyle.navbar} >
            <div className={navStyle.logo}>
                <img src={appLogo} alt='Bellmonte Motors' />
                <div>
                    <img className={navStyle.logoName} src={logoName} alt='Bellmonte Industries' />
                </div>
            </div>

            <div
                className={navStyle.hamburgerMenu}
                onClick={() => setToggleMobileNavOverlay(true)}
            >
                <FaBars style={{ height: '24px', width: '24px' }} />
            </div>

            <div className={`${toggleMobileNavOverlay ? navStyle.dBlock : navStyle.dHidden} ${navStyle.mobileOverlayBg}`}
                style={{
                    backgroundColor: toggleMobileNavOverlay ? 'rgba(0,0,0,.65)' : 'transparent',
                }}
            >
            </div>
            <div className={`${navStyle.navLinksWrapper} ${toggleMobileNavOverlay ? navStyle.dBlock : navStyle.dHidden}`} >
                <div className={navStyle.hamburgerMenu} onClick={() => setToggleMobileNavOverlay(false)}>
                    <FaXmark style={{ height: '24px', width: '24px' }} />
                </div>
                <div className={navStyle.navLinks}>
                    <NavLink className='borderlessBtn' to='/'>Home</NavLink>
                    <NavLink className='borderlessBtn' to='/about'>About us</NavLink>
                    <NavLink className='borderlessBtn' to='/services'>Services</NavLink>
                    <NavLink className='borderlessBtn' to='/contact'>Contact us</NavLink>
                    <NavLink className='borderlessBtn' to='/requestaquote'>Request a Quote</NavLink>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar