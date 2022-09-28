import React, { useEffect, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';

const Home = () => {
    const [exercise,setExercise] = useState([]);
    useEffect(()=>{
        fetch('cardDb.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])
    
    return (
        <div className='home'>
            <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness Heroes</h1>
            <h2>Select today's exercise</h2>

            <div className="cards">
            {
                exercise.map(card => <Card card={card}></Card>)
            }
            </div>
        </div>
    );
};

export default Home;