import React, { useEffect, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';

const Home = (props) => {
    const {time, setTime} = props;
    const [exercise,setExercise] = useState([]);
   

    useEffect(()=>{
        fetch('cardDb.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])
    
    const handleAddToExercise = (card) =>{

        const newTime = [...time, card.Time_required];
        setTime(newTime);
        //console.log(newTime);
    };

    return (
        <div className='home'>
            <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness Heroes</h1>
            <h2>Select Today's Exercise</h2>

            <div className="cards">
            {
                exercise.map(card => <Card 
                    key={card.name}
                    card={card}
                    handleAddToExercise={handleAddToExercise}
                    ></Card>)
            }
            </div>
        </div>
    );
};

export default Home;