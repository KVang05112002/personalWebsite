import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>JIN</h1>
            </Link>
            <ul className={click ? "header__menu active" : "header__menu"}>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/project">PROJECT</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
            <div className='main-menu' onClick={handleClick}>
                {click ?
                    (<FaTimes size={20} style={{ color: "#fff" }} />)
                    :
                    (<FaBars size={20} style={{ color: "#fff" }} />)
                }

            </div>
        </div>
    )
}

export default Navbar
