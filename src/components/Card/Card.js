import React from 'react';
import './Card.css';
const Card = ({handleAddToExercise,card}) => {
    const {name, picture, description,For_Age,Time_required} = card;

    return (
        <div className="card">
                <img src={picture} alt="" />
                <h3>{name}</h3>
                <p>{description.slice(0,100)}</p>
                <p>For Age:  <b>{For_Age}</b></p>
                <p>Time required: <b>{Time_required}s</b></p>
                <button onClick={() => handleAddToExercise(card)} className='btn-list'>Add to list</button>
        </div>
    );
};

export default Card;