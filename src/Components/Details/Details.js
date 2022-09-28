import React from 'react';
import './Details.css'

const Details = () => {
    return (
        <div>
            <div className="top">
                <img src="" alt="" />
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
            <h3>Add A Break</h3>
            <div className="time">
                <h5 className='rest'>5m</h5>
                <h5 className='rest'>10m</h5>
                <h5 className='rest'>15m</h5>
                <h5 className='rest'>20m</h5>
                <h5 className='rest'>30m</h5>
            </div>
        </div>
    );
};

export default Details;