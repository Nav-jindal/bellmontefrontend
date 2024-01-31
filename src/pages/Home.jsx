// Packages
import React, { useEffect ,useRef } from "react"
import gsap from 'gsap';
import { NavLink } from "react-router-dom";
import Slider from 'react-slick';

// Images & Modular Styling
import truckImage from '../images/truck.png'
import backgroundImage from '../images/background.png'
import homeStyles from '../styles/Home.module.sass'

// About Section Image
import aboutImage from '../images/about.jpg'

// Clients Section Image
import firstClient from '../images/1.png'
import secondClient from '../images/2.png'
import thirdClient from '../images/3.png'
import fourthClient from '../images/4.png'
import fifthClient from '../images/5.png'

// Gallery Section Image
import gallery1 from '../images/gallery-1.jpg'
import gallery2 from '../images/gallery-2.jpg'
import gallery3 from '../images/gallery-3.jpg'
import gallery4 from '../images/gallery-4.jpg'
import gallery5 from '../images/gallery-5.jpg'
import gallery6 from '../images/gallery-6.jpg'
import gallery7 from '../images/gallery-7.jpg'
import gallery8 from '../images/gallery-8.jpg'

// Components
import FeatureCard from "../components/FeatureCard"
import PenIcon from '../icons/PenIcon'
import ClientsIcon from '../icons/ClientsIcon'
import HeadPhoneIcon from '../icons/HeadPhoneIcon'

const Home = () => {
    // Constant
    const featuresInfo = [
        { 
            id:0, 
            icon: <PenIcon />,
            title: 'Customized Solutions', 
            description: 'We will provide you customized solutions to all your Reefer Vehicle need right from purchase to financing and subsidy.'
        },
        { 
            id:1, 
            icon: <ClientsIcon />,
            title: 'Wide Range of Clients', 
            description: 'We have wide range of clients and partners that help us provide you with the best services right from truck purchasing to Reefer container.'
        },
        { 
            id:2, 
            icon: <HeadPhoneIcon />,
            title: 'Pan India Services', 
            description: 'We provide Pan India Services ensuring that our services reaches to every part of the country.'
        },
    ]
    const clientLogos = [
        firstClient,
        secondClient,
        thirdClient,
        fourthClient,
        fifthClient,
    ]

    //Refs
    const background = useRef()
    const truck = useRef()

    //GSAP 
    useEffect(()=>{
        // animation for background image (from opacity 0 to 1)
        gsap.fromTo(background.current, {opacity:0} ,{opacity: 1, delay: .9, duration: 1.25, ease: 'power1.inOut' })
        // animation for truck image sliding from right 750px to the declared origin or original position
        gsap.fromTo(truck.current, {x: 750 }, {x: 0, delay: 2.25, duration: 1.3, ease: 'power0.inOut' })
    },[])

    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);

    return <div>
        <div className={homeStyles.heroSection} ref={background}>
            <div className={homeStyles.heroContent} >
                <h1>One stop solution for Refrigerated Vehicles</h1>
                <p>Providing comprehensive services for all your Refrigerated Vehicles needs</p>
                <NavLink to='/requestaquote'>
                    <div className='primaryBtn'>Request a Quote</div>
                </NavLink>
            </div>
            <div className={homeStyles.backgroundWrapper}>
                <div className={homeStyles.truckImage}>
                    <img ref={truck} src={truckImage} alt='truck'/>
                </div>
                <div className={homeStyles.heroBackground}>
                    <img src={backgroundImage} alt='snow background' />
                </div>
            </div>
        </div>
        <div className={homeStyles.featuresSection}>
            <h2> Our Key Features </h2>
            
            <div className={homeStyles.features}>
            {featuresInfo.map(feature => (
                <FeatureCard 
                    key={feature.id}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
            </div>
        </div>
        <div className={homeStyles.aboutSection}>
            <div className={homeStyles.aboutImage}>
                <img src={aboutImage} alt='about image'/>
            </div>
            <div className={homeStyles.aboutContent}>
                {/* <p>About Bellmonte</p> */}
                <h2>Providing Customized Solutions for your needs</h2>
                <p> Our vehicle selection includes various refrigerated trucks and vans which offer the ideal way to 
                deliver Fruits and Vegetables, Frozen Foods, Medicine, Fish, Meat. Bellmonte Industries Private 
                Limited's Transportation Solutions is a refrigerated truck manufacturer based on providing superior 
                service with honesty. The owners enjoy what they do. No deal is ever too important to sacrifice 
                our integrity in the name of profit. Our 15+ years of combined experience in building and 
                selling refrigerated delivery vehicles ensures you are in the right place for your reefer truck needs.
                </p>
                <NavLink to='/about'>
                    <div className='secondaryBtn'> Learn More </div>
                </NavLink>
            </div>
        </div>
        
        {/* carousel starts here */}
        <div>
            <h2>Our Gallery</h2>
            <Slider 
                dots={true}
                arrows={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={3000}
                className={`${homeStyles.gallery}`} // classname for inner slider div
                pauseOnDotsHover={true}
            >
                <div>
                    <img src={gallery1} alt='first image'/>
                </div>
                <div>
                    <img src={gallery2} alt='second image'/>
                </div>
                <div>
                    <img src={gallery3} alt='third image'/>
                </div>
                <div>
                    <img src={gallery4} alt='fourth image'/>
                </div>
                <div>
                    <img src={gallery5} alt='fifth image'/>
                </div>
                <div>
                    <img src={gallery6} alt='sixth image'/>
                </div>
                <div>
                    <img src={gallery7} alt='seventh image'/>
                </div>
                <div>
                    <img src={gallery8} alt='eigth image'/>
                </div>
            </Slider>
        </div>
        <div className={`${homeStyles.clientLogoSection} fullWidth`}>
            <div className={homeStyles.clientLogosWrapper}>
                {clientLogos.map((clientlogo, index) => (
                    <div key={index} >
                        <img src={clientlogo} alt={'logo'}/>
                    </div>
                ))}
            </div>
        </div>
        <div className={homeStyles.requestQuoteSection}>
            <h3>Interested? Give us a headsup!</h3>
            <NavLink to='/requestaquote'>
                <div className='primaryBtn'>Request a Quote</div>
            </NavLink>
        </div>
    </div>
}

export default Home