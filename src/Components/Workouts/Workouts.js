import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Workout from '../Workout/Workout';
import './Workouts.css'
import logo from '../Workouts/logo.png'

const Workouts = () => {
    const [workouts, setWorkouts] = useState([])
    // exercise time state
    const [wrkoutTime, setWorkoutTime] = useState(0)
    // useState for break
    
    useEffect(() => {
        fetch('workouts.json')
            .then(res => res.json())
        .then(data=>setWorkouts(data))
    }, [])
    const handleTime = (time) => {
        setWorkoutTime(wrkoutTime+time)
    }
    return (
        <>
            <h3 className='main-top'><img className='logo' src={logo} alt="" /> WorkOut Club</h3>
        <div className='main-container'>
            <div className="workouts-container">
                {
                    workouts.map(workout => <Workout key={workout.id} workout={ workout} handleTime={handleTime} />)
                }
            </div>
            <div className="details-container">
                <Details wrkoutTime={wrkoutTime} />
            </div>
            </div>
            </>
    );
};

export default Workouts;