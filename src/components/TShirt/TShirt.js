import React from 'react';
import './TShirt.css'
const TShirt = (props) => {
    const {name, picture, price} = props.tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <h2>Price:{price}</h2>
            <button>Add To Cart</button>
        </div>
    );
};

export default TShirt;