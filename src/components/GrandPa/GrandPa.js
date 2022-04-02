import React from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './GrandPa.css'



const GrandPa = () => {
    const house = 14;
    return (
        <div className='grandpa' >
            <h3>Grandpa</h3>
           <section style={{display:'flex'}}>
          `     <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>`
           </section>
        </div>
    );
};

export default GrandPa;