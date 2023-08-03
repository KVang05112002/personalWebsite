import React from 'react';
import "./Footer.scss";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>123 DaLat Province.</p>
                            <p>Vietnam.</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +84 079-7909-465</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            info@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About me</h4>
                    <p>I'm a Front-end dev. graduate on Auguest 2023 at Yersin University</p>
                    <div className='social'>
                        <NavLink to="https://www.facebook.com/eten.kjon/">
                            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <NavLink to="https://github.com/KVang05112002">
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
