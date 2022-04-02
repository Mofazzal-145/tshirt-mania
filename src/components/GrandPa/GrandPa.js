import React, { createContext, useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './GrandPa.css'

/* 
context api
1. call createContext with a default value
2. set a variable of the context with uppercase
3. Make sure you export the context to use it in other places
4. Wrap you child content using RingContext.Provider
5. Provide a value
6. To consume the context from child component
7. useContext hook and pass the contextName.

*/


export const RingContext = createContext('diamond')

const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';

    const handleBuyAHouse = () =>{
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <RingContext.Provider value='Golden ring'>
            <div className='grandpa' >
            <h3>Grandpa</h3>
            <p>House:{house} <button onClick={handleBuyAHouse}>Buy A House</button></p>
           <section style={{display:'flex'}}>
          `     <Father house={house} ornament={ornament}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>`
           </section>
         </div>
        </RingContext.Provider>
    );
};

export default GrandPa;