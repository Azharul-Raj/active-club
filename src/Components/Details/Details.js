import React, { useEffect, useState } from 'react';
import './Details.css'
import img from '../../profile.jpg'
import Swal from 'sweetalert2'


const Details = ({ wrkoutTime }) => {
    // setBreakTime(storedItem)
    // useState for break
    const [breakTime, setBreakTime] = useState(0)
    
    // set To localStorage start here
    const handleBreak = (num) => {
        setBreakTime(num)
        localStorage.setItem('break',num)
    }
    useEffect(() => {
        const storedItem = localStorage.getItem('break')
        setBreakTime(storedItem)
    },[])
    // set To localStorage ends here
    const successMessage=() => {
        console.log('good')
        Swal.fire(
            'Hey Good job!!!',
            'You Have Completed The Your Task!',
            'success'
          )
    }
  
    return (
        <div>
            <div className="top">
                <img className='profile' src={img} alt="" />
                <h2>Rohan Rohman</h2>
            </div>
            <div className="info">
                <div className="height">
                    <h3>5.6 <small>inch</small></h3>
                    <p>Height</p>
                </div>
                <div className="age">
                    <h3>22<small>years</small></h3>
                    <p>Age</p>
                </div>
            </div>
            <h3 className='title'>Add A Break</h3>
            <div className="time">
                <button onClick={()=>handleBreak(5)} className='rest'>5m</button>
                <button onClick={()=>handleBreak(10)} className='rest'>10m</button>
                <button onClick={()=>handleBreak(15)} className='rest'>15m</button>
                <button onClick={()=>handleBreak(20)} className='rest'>20m</button>
                <button onClick={()=>handleBreak(30)} className='rest'>30m</button>
            </div>
            <h3 className='title'>Exercise Details</h3>
            <div className="time-taken">
                <h3>Exercise Time</h3>
                <p>{ wrkoutTime} min</p>
            </div>
            <div className="time-taken">
                <h3>Break Time</h3>
                <p>{ breakTime?breakTime:0} min</p>
            </div>
            <button onClick={successMessage} className='complete-btn'>Activity Complete</button>
        </div>
    );
};

export default Details;