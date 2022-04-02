import React from 'react';
import './TShirt.css'


const TShirt = ({handleAddToCart, tShirt}) => {
    const {name, picture, price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <h2>Price:{price}</h2>
            <button onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;