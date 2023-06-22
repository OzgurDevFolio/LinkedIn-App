import React from 'react'
import './Footer.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import logo from '../assets/logoLinkedin.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <ul className="footer__links">
                    <li>About</li>
                    <li>Accessibilitiy</li>
                    <li>Help Center</li>
                    <li className="footer__dropdown">
                        Privacy & Terms
                        <ArrowDropDownIcon id="dropdown__icon" style={{ color: 'grey' }} />
                    </li>
                    <li>Ad Choices</li>
                    <li>Advertising</li>
                    <li className="footer__dropdown">
                        Business Services
                        <ArrowDropDownIcon id="dropdown__icon" style={{ color: 'grey' }} />
                    </li>
                    <li>Get the LinkedIn app</li>
                    <li>More</li>
                </ul>
                <div className="company__component">
                    <img src={logo} alt="Linkedin" className="footer__logo" />
                    <span>LinkedIn Corporation</span>
                    <span>©</span>
                    <span>2023</span>
                </div>
            </div>
        </>
    )
}

export default Footer
