import React from 'react';
import "./HeroImg.scss";
import IntroImg from "../assets/intro_img.png";
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={IntroImg} alt="IntroImg" />
            </div>
            <div className='content'>
                <p>HI, I'M A FRONT-END DEV.</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/project" className='btn'>PROJECTS</Link>
                    <Link to="/contact" className='btn btn-light'>CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg
