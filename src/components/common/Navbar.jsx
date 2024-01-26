// Packages
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

// Images & Styling
import appLogo from '../../images/logo.svg'
import navStyle from '../../styles/Navbar.module.sass'

// Components
import CloseIcon from '../../icons/CloseIcon'
import HamburgerIcon from '../../icons/HamburgerIcon'

const Navbar = () => {

    // Functions
    const onClickContact = () => {
        scroll.scrollToBottom({ duration: 2100, smooth: 'easeInOut' });
    }

    // States
    const [toggleMobileNavOverlay, setToggleMobileNavOverlay] = useState(false)

    return <>
    <nav className={navStyle.navbar} >
        <div className={navStyle.logo}>
            <img src={appLogo} alt='Bellmonte'/>
            <div>
                Reefer Vehicle<br/>
                <span>Powered By Bellmonte</span>
            </div>
        </div>

        <div 
            className={navStyle.hamburgerMenu} 
            onClick={() => setToggleMobileNavOverlay(true)}
        >
            <HamburgerIcon height={36} width={36} />
        </div>

        <div className={`${toggleMobileNavOverlay ? navStyle.dBlock : navStyle.dHidden} ${navStyle.mobileOverlayBg}`}
            style={{
                backgroundColor: toggleMobileNavOverlay ? 'rgba(0,0,0,.65)' : 'transparent',
            }}
        >
        </div>
        <div className={`${navStyle.navLinksWrapper} ${toggleMobileNavOverlay ? navStyle.dBlock : navStyle.dHidden}`} >
            <div className={navStyle.hamburgerMenu} onClick={() => setToggleMobileNavOverlay(false)}>
                <CloseIcon height={36} width={36} />
            </div>
            <div className={navStyle.navLinks}>
                <NavLink className='borderlessBtn' to='/'>Home</NavLink>
                <NavLink className='borderlessBtn' to='/about'>About</NavLink>
                <NavLink className='borderlessBtn' to='/services'>Services</NavLink>
                <div className='borderlessBtn' onClick={onClickContact}>Contact</div>
                <NavLink className='borderlessBtn' to='/requestaquote'>Request a Quote</NavLink>
            </div>
        </div>
    </nav>
    </>
}

export default Navbar