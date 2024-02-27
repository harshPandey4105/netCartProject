import React from 'react';
import './FourthSection.css';
import instruments from '../images/instruments.png';
const FourthSection = () => {
    return (
        <section className="fourth-section">
            <div className="image-container">
                <img src={instruments} alt="Description of the image" />
            </div>
            <div className="text-container">
                <p>Valves - Pumps - Pipes -  IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
            </div>
            <div className='hr-line'></div>
            <div className='footer-heading'><p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p></div>
            <div className='footer-description'><p>CHEMICALS & PROCESS<span> | </span>POWER<span> | </span> WATER & WASTE WATER<span> | </span> OILS & GAS<span> | </span>PHARMA<span> | </span>SUGARS & DISTILLERIES<span> | </span>PAPER & PULP<span> | </span>MARINE & DEFENCE<span> | </span>METAL & MINING<span> | </span>FOOD & BEVERAGE<span> | </span> PETROCHEMICAL & REFINERIES<span> | </span> SOLAR<span> | </span> BUILDING<span> | </span> HVAC<span> | </span> FIRE FIGHTING<span> | </span> AGRICULTURE & RESIDENTIAL</p></div>
            <div className='main-footer'>
                <div>
                    <i class="fa-solid fa-phone"></i><span><a href="#"> Toll Free 1800 200 1234</a></span>
                </div>
                <div>
                    <i class="fa-brands fa-facebook"></i><span><a href="#"> www.facebook.com/cripumps</a></span>
                </div>
                <div>
                    <i class="fa-solid fa-globe"></i><span><a href="#"> www.crigroups</a></span>
                </div>
            </div>
        </section>
    );
}

export default FourthSection;
