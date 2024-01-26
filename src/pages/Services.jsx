// Packages
import React, { useState } from "react"
import { NavLink } from "react-router-dom"

// Styling & Images
import servicesStyles from '../styles/Services.module.sass'
import truckChassis from '../images/truck_chasis.jpg'
import reeferContainer from '../images/reefer_container.jpg'
import truckFinance from '../images/truck_financing.jpg'
import truckSubsidy from '../images/truck_subsidy.jpg'
import reeferUnit from '../images/reefer_unit.jpg'

const Services = () => {
    // Constant
    const servicesArray = [
        {
            id: 0,
            url: truckChassis,
            title: 'Solution for Truck Chassis',
            description: "At the heart of every robust truck lies its skeleton - the chassis. This sturdy framework serves as the foundation, bearing the weight of your cargo and ensuring maneuverability on any road. It's the platform upon which your truck moves. But choosing the right chassis isn't simply picking size and strength. It's about finding the perfect match for your unique needs. Every haulage journey has its own demands, we understand that needs and provide you with the best. We've partnered with industry giants like Eicher, Bharat Benz, Tata, and Ashok Leyland to offer you a diverse range of chassis options. From nimble pickups to heavy-duty haulers, we have the expertise to navigate the complex world of truck configurations."
        },
        {
            id: 1,
            url: reeferContainer,
            title: 'Solution for Container/ Box',
            description: "These refrigerated chambers are the heroes of the highway, guarding your valuable cargo against the harsh realities of the road and weather. But choosing the right cooling container is more than just picking a size and a plug. It's about finding the perfect partner for your specific needs, ensuring consistent, reliable temperature control that protects your precious cargo. We partner with industry leaders like Saurakha, Subzero, Zep, ThermoKing, and Carrier to bring you a diverse range of cooling container options. From small, nimble units for urban deliveries to powerful, multi-compartment giants for cross-country hauls, we have the expertise to navigate the intricate world of temperature-controlled transportation",       
        },
        {
            id: 2,         
            url: truckFinance,
            title: 'Solution for Truck Financing',
            description: "We are working with all Nationalized and Private Banks to fulfill your financial needs. Purchasing of Reefer Vehicles requires funds from various sources and as such promoters/owners may not be able to fund the entire project on their own sources. The entire Project cost is taken into consideration except land and collateral free funding can be arranged upto 89% of the project cost. Primary security would be the Hypothecation of Reefer Vehicles Up to Rs. 50 Lakhs to 10 Crore.",
            table:''
        },
        {
            id: 3,
            url: truckSubsidy,
            title: 'Solution for Truck Subsidy',
            description: "We are providing Customized and integrated solution to our clients for availing the Subsidies from Government of India. We are working with The Ministry of Agriculture & Farmers Welfare; Ministry of Food Processing Industries, Ministry of Fisheries, Animal Husbandry and Dairying to avail the Capital subsidy, Back Ended subsidy and Interest subvention subsidy to reduce burden of Term Loan of companies. We ensure that your project gets maximum subsidy/grant.",
            table:''
        },
        {
            id: 4,
            url: reeferUnit,
            title: 'Solution for Reefer Unit',
            description: "Essentially, reefer units are specialized climate control systems for trucks and trailers. They work tirelessly to maintain a set temperature, ensuring that precious cargo like fresh produce, pharmaceuticals, and even floral arrangements arrive at their destination in pristine condition. Choosing the right reefer unit can be challenging.We understand the unique needs of different industries and applications. That's why we've partnered with leading reefer unit manufacturers, assembling a curated selection of the most reliable and efficient units on the market.",
        },
    ]

    // States
    const [currentTab, setCurrentTab] = useState(0)

    // Effect
    return <div>
        <h2 className={servicesStyles.heading}>Services</h2>
        <div className={servicesStyles.tabsHeading}>
            {servicesArray.map((tab, index) => 
                <div 
                    className={`${currentTab === tab?.id ? servicesStyles.active : '' } borderlessBtn `}
                    key={tab?.id} 
                    onClick={()=>setCurrentTab(tab?.id)}
                >
                    {tab?.title}
                </div>
            )}
        </div>

        <div className={`${servicesStyles.imageWrapper} fullWidth`}>
                <img src={servicesArray[currentTab]?.url} alt={servicesArray[currentTab]?.title} />
        </div>        
        <div className={servicesStyles.tabContentWrapper}>
            <div>
                <h3>{servicesArray[currentTab]?.title}</h3>
                <NavLink to='/requestaquote'>
                    <div className={`${servicesStyles.button} secondaryBtn`}>Request a Quote</div>
                </NavLink>
                <p>{servicesArray[currentTab].description}</p>
                { currentTab === 3 &&  <div>
                <div className={servicesStyles.reeferVehicleTable}>
                <h3>Subsidy for Reefer Vehicle</h3>
                <table className={servicesStyles} cellpadding="0" cellspacing="0">
                    <tr>
                        <th>S.no</th>
                        <th>National Horticulture Board Credit linked back ended subsidy</th>
                        <th>Category/ State</th>
                        <th>Subsidy %</th>
                        <th>Maximum Subsidy Amount</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Reefer Vehicles Project Subsidy</td>
                        <td className={servicesStyles.noPadding}>
                            <div className={`${servicesStyles.borderBottomOnly}`}>General Areas</div>
                            <div>NE Region, Hilly States</div>
                        </td>
                        <td className={servicesStyles.noPadding}>
                            <div className={`${servicesStyles.borderBottomOnly}`}>35%</div>
                            <div >50%</div>
                        </td>
                        <td className={servicesStyles.noPadding}>
                            <div className={`${servicesStyles.borderBottomOnly}`}>Rs.50.75 lakh per project</div>
                            <div>Rs. 72.50 lakh per project</div>
                        </td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Interest Subvention @3% : .Maximum repayment Period: 7 years inclusive of moratorium</td>
                        <td>All Region</td>
                        <td>3%</td>
                        <td>Rs 2.00 crore per project</td>
                    </tr>
                </table>

                <table className={servicesStyles} cellpadding="0" cellspacing="0">
                    <tr>
                        <th>S.no</th>
                        <th>Government of Uttar Pradesh and Ministry of Food Processing Industries Government of India</th>
                        <th>Category/ State</th>
                        <th>Subsidy %</th>
                        <th>Maximum Subsidy Amount</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Reefer Vehicles Project Subsidy</td>
                        <td> Uttar Pradesh</td>
                        <td> 35%</td>
                        <td> Rs 10.00 crore per project</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Interest Subvention @3% : .Maximum repayment Period: 7 years inclusive of moratorium</td>
                        <td>Uttar Pradesh</td>
                        <td>7%</td>
                        <td>Rs 50.00 Lakhs per project</td>
                    </tr>
                </table>
                </div>
                
                </div>}
            </div>
            
        </div>
    </div>
}

export default Services