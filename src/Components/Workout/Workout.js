import React from 'react';
import './Workout.css'


const Workout = ({ workout }) => {
    const{name,img,desc,age,time}=workout
    return (
        <div className='workout'>
            <img className='img' src={img} alt="" />
            <div className="details">
            <h3>{ name}</h3>
            <p>{desc ? desc.slice(0, 75) + '...' : 'No Desc'}</p>
            
           </div>
        </div>
    );
};

export default Workout;