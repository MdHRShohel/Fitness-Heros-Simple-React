import React from 'react';
import './Card.css'
const Card = (props) => {
    const {name, picture, description,For_Age,Time_required} = props.card;
    return (
        <div className="card">
                <img src={picture} alt="" />
                <h3>{name}</h3>
                <p>{description.slice(0,150)}</p>
                <p>For Age: {For_Age}</p>
                <p>Time required: {Time_required}s</p>
                <button className='btn-list'>Add to list</button>
            </div>
    );
};

export default Card;