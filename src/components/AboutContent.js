import React from 'react';
import "./AboutContent.scss";
import { Link } from 'react-router-dom';
import Reactjs1 from "../assets/reactjs1.png";
import Reactjs2 from "../assets/reactjs2.jpg";

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I'm a react front-end developer.
                    reponsive secure websites for my clients.
                </p>
                <Link to="/contact">
                    <button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='top'>
                        <img src={Reactjs1} alt='reactjs' className='img' />
                    </div>
                    <div className='bottom'>
                        <img src={Reactjs2} alt='reactjs' className='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
