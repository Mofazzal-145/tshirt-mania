import React from 'react';
import './Cart.css'


const Cart = ({cart,handleRemoveFromCart}) => {
    // conditional rendering options
    // 1. Element variable
    // 2. ternary operator condition ? true : false
    // 3. && operator (shorthand)
    // 4. || 
    let command;
    if(cart.length === 0) {
        command = <p>please add at least one item!!!</p>
    }
    else if (cart.length === 1){
        command = <p>Please add more</p>
    }
    else{
        command = <p><small>Thanks for adding items</small></p>
    }
    return (
        <div>
            <h3>Items Selected:{cart.length}</h3>
           
           {
               cart.map(tShirt=><p>
                   {tShirt.name}
                   <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                   </p>)
           }
           {/* conditional rendering */}
            {command}
            {cart.length !==4 ? <p>Keep adding</p> : <button>Remove All</button> }
            {cart.length === 3 &&  <div className='orange'>
                    <p>Gift for personal one!!</p>
                </div>} 

             {cart.length === 0 || <p className='orange'>Yoo !!!! you are buying</p>}    
             {cart.length ===4 && <button className='orange'>Review Order</button> }
        </div>
    );
};

export default Cart;