// Packages
import React, { useEffect } from "react"
import Slider from 'react-slick';

// Images & Styling
import aboutImage from '../images/about.jpg'
import aboutStyles from '../styles/About.module.sass'
import gallery1 from '../images/gallery-1.jpg'
import gallery2 from '../images/gallery-2.jpg'
import gallery3 from '../images/gallery-3.jpg'
import gallery4 from '../images/gallery-4.jpg'

const About = () => {
    
    // Effects:
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return <div>
        <h2>About</h2>
        <Slider 
            dots={true}
            arrows={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            className={`${aboutStyles.gallery} `} // classname for inner slider div
            pauseOnDotsHover={true}
        >
            <div>
                <img src={aboutImage} alt='about image'/>
            </div>
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
        </Slider>
        {/* <div className={`${aboutStyles.imageWrapper} fullWidth`}>
            <img src={aboutImage} alt='about image' />
        </div> */}
        <div className={aboutStyles.aboutContentWrapper}>
          
            <div><h3>Providing Customized Cooling Solutions</h3></div>
            <p> Bellmonte Industries Private Limited is your one stop Solution for all your Reefer / Refrigerated Vehicles 
                Transportation Company. We will start from beginning the project 
                from Designing & Drawing, Preparation of Detailed Project Report, Solution and assistance for availing 
                Finance and Subsidy for the project from 20’ to 32’ Reefer / Refrigerated Container, we will design and
                build the perfect solution for your company. We work with all Truck Chassis, Body and Refrigeration unit
                manufacturers to ensure you get the right delivery vehicle. We work with all Nationalized and Private 
                Banks to fulfill your financial needs. We work with The Ministry of Agriculture & Farmers Welfare; 
                Ministry of Food Processing Industries, Ministry Of Fisheries, Animal Husbandry and Dairying to avail
                the Subsidies to  reduce burden of Term Loan of companies.

                Our vehicle selection includes various refrigerated trucks and vans which offer the 
                ideal way to deliver Fruits and Vegetables, Frozen Foods, Medicine, Fish, Meat. Bellmonte 
                Industries Private Limited’s Transportation Solutions is a refrigerated truck manufacturer 
                based on providing superior service with honesty. The owners enjoy what they do. No deal 
                is ever too important to sacrifice our integrity in the name of profit. Our 15+ years of 
                combined experience in building and selling refrigerated delivery vehicles ensures you are 
                in the right place for your reefer truck needs.

            </p>

            
        </div>
    </div>
}

export default About