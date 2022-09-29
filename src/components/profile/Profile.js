import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image from './HR_Shohel.png';
import './Profile.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Profile = ({time}) => {
     let total = 0;

      for (const pr in time) {
          console.log(pr);
          total += time[pr];
      }

    const handleBtn = (breakTime) => {
        const time = document.getElementById(breakTime);
        const showTime = document.getElementById('showTime');
        const value = time.innerText;
        showTime.innerText = value;
    }

    const notify = () => toast("WOW Congratulations!! You have completed your exercise today. You can take a break now. Thank you for using our service. Have a nice day.");

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
                <div className='time-container'>
                    <button onClick={()=>{handleBtn('breakBtn1')}}
                     className='btn'
                    ><span id='breakBtn1'>10</span>s</button>

                    <button onClick={()=>{handleBtn('breakBtn2')}} className='btn'><span id='breakBtn2'>20</span>s</button>

                    <button onClick={()=>{handleBtn('breakBtn3')}} className='btn'><span id='breakBtn3'>30</span>s</button>

                    <button onClick={()=>{handleBtn('breakBtn4')}} className='btn'><span id='breakBtn4'>40</span>s</button>
                    
                    <button onClick={()=>{handleBtn('breakBtn5')}} className='btn'><span id='breakBtn5'>50</span>s</button>
                </div>

                <h3>Exercise Details</h3>

                <div className='exercise-details'>
                    <h4>Exercise time</h4>
                    <h4>{total} seconds</h4>
                </div>
                <div className='exercise-details'>
                    <h4>Break time</h4>
                    <h4><span id='showTime'>00</span> seconds</h4>
                </div>

                <button onClick={notify} className='activity-completed-btn'>Activity Completed</button>
                <ToastContainer />
        </div>
    );
};

export default Profile;