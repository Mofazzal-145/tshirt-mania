import React from 'react';
import Myself from '../MySelf/MySelf';
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister';
import './Father.css'

const Father = ({house, ornament}) => {
    return (
        <div>
            <h2>Father</h2>
            <p>House:{house}</p>
            <div style={{display:'flex'}}>
                <Myself house={house} ornament={ornament}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;