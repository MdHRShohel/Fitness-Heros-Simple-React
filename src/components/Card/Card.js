import React, { useState } from 'react';
import './Card.css';
const Card = ({handleAddToExercise,card}) => {
    const {name, picture, description,For_Age,Time_required} = card;

    const [buttonText, setButtonText] = useState('Add To List');
    const [isActive, setIsActive] = useState(true);
    const [disable, setDisable] = useState(false);

  function handleClick() {
    setButtonText('Item Added');
    setDisable(true);
    handleAddToExercise(card);
    setIsActive(false);
  }
    return (
        <div className="card">
                <img src={picture} alt="" />
                <h3>{name}</h3>
                <p>{description.slice(0,60)}</p>
                <p>For Age:  <b>{For_Age}</b></p>
                <p>Time required: <b>{Time_required}s</b></p>
                
                <button disabled={disable}
                style={{
                    backgroundColor: isActive ? '' : 'green',
                  }}
                onClick={handleClick} className='btn-list'>{buttonText}</button>
        </div>
    );
};

export default Card;