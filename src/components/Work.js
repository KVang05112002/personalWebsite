import React from 'react';
import "./Work.scss";
import "./WorkCard.scss";
import WorkCard from './WorkCard';
import WorkCardData from "./WorkCarData";

const Work = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                {WorkCardData.map((val, ind) => {
                    return (
                        <WorkCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Work
