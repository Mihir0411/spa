import React from 'react';



const Cart = (props) => {
    const cart = props.cart

    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shipping = 0;
    if(total>35){
        shipping = 0;
    }else if(total>15){
        shipping = 4.99
    } else if(total>0){
        shipping =12.99
    }
    return (
        <div>
            <h1>Order Summery</h1>
            <p>Order Item:{cart.length}</p>
            <p>shipping: {shipping}</p>
            <p>Total Price {total}</p>
            <br></br>
            {
                props.children
            }
        </div>
    );
};

export default Cart;