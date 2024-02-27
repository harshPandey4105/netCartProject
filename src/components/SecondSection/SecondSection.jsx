import React from 'react';
import './SecondSection.css';
import award from '../images/award.png';
import awarding from '../images/awarding.png';
const SecondSection = () => {
    return (
        <section className="second-section">
            <div className="left-side">
                <img src={award} alt="award-img" />
            </div>
            <div className="right-side">
                <div className='rigth-side-heading-sec'>
                    <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                    <p>• C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p>
                    <p>• C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p>
                </div>
                <img src={awarding} alt="awarding-img" />
                <div className="description">
                    <p>Government of India has awarded the <span>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
            </div>
        </section>
    );
}

export default SecondSection;
