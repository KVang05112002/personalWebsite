import React from 'react';
import "./WorkCard.scss";
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.imgsrc} alt='ímge' />
            <h2 className='project-title'>{props.title}</h2>
            <div className='project-details'>
                <p>{props.text}</p>
                <div className='project-btns'>
                    <NavLink to={props.view} className="btn">VIEW</NavLink>
                    <NavLink to="url.com" className="btn">SOURCE</NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
