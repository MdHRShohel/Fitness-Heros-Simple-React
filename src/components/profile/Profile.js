import React from 'react';
import './Profile.css';
import image from './HR_Shohel.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile-info">
                <div>
                <img src={image} alt="" />
                </div>
                <div className='user-info'>
                    <h2>Md. Haibur Rahman Shohel</h2>
                    <p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="user-details">
                <div>
                    <h1>70<span>kg</span></h1>
                    <p>Weight</p>
                </div>
                <div>
                    <h1>5.6<span></span></h1>
                    <p>Height</p>
                </div>
                <div>
                    <h1>21<span>yrs</span></h1>
                    <p>Age</p>
                </div>
            </div>
            <h3>Add A Break</h3>

                <div className='breakTime-container'>
                    <button className='btn'><span id='breakTime1'>10</span>s</button>

                    <button className='btn'><span id='breakTime2'>20</span>s</button>

                    <button className='btn'><span id='breakTime3'>30</span>s</button>
                    <button className='btn'><span id='breakTime4'>40</span>s</button>
                    <button className='btn'><span id='breakTime5'>50</span>s</button>

                </div>

                <h3>Exercise Details</h3>

                <div className='exercise-details'>
                    <h4>Exercise time</h4>
                    <p><span>00</span> seconds</p>
                </div>
                <div className='exercise-details'>
                    <h4>Break time</h4>
                    <p><span id='showBreakTime'>00</span> seconds</p>
                </div>

                <button className='activity-completed-btn'>Activity Completed</button>
        </div>
    );
};

export default Profile;