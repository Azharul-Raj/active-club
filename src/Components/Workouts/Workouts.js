import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Workout from '../Workout/Workout';
import './Workouts.css'

const Workouts = () => {
    const [workouts, setWorkouts] = useState([])
    useEffect(() => {
        fetch('workouts.json')
            .then(res => res.json())
        .then(data=>setWorkouts(data))
    },[])
    return (
        <div className='main-container'>
            <div className="workouts-container">
                {
                    workouts.map(workout => <Workout key={workout.id} workout={ workout} />)
                }
            </div>
            <div className="details-container">
                <Details/>
            </div>
        </div>
    );
};

export default Workouts;