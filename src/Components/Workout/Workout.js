import React from 'react';
import './Workout.css'


const Workout = ({ workout,handleTime }) => {
    const{name,img,desc,age,time}=workout
    return (
        <div className='workout'>
            <img className='img' src={img} alt="" />
            <div className="details">
            <h3>{ name}</h3>
            <p>{desc ? desc.slice(0, 75) + '...' : 'No Desc'}</p>
                <h4>For Age : { age}</h4>
                <h4>Time Required : { time}m</h4>
            </div>
            <button onClick={()=>handleTime(time)} className='add-list'>Add To List</button>
        </div>
    );
};

export default Workout;