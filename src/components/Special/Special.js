import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ornament}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h3>Special</h3>
            <p><small>Gift:{ornament}</small></p>
            <p><small>Gift:{ring}</small></p>
        </div>
    );
};

export default Special;