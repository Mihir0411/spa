import React from 'react';


const Cart = (props) => {
    const cart = props.cart

    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price
        
    }
    return (
        <div>
            <h1>Order Summery</h1>
            <p>Order Item:{cart.length}</p>
            <p>Total Price {total}</p>
        </div>
    );
};

export default Cart;