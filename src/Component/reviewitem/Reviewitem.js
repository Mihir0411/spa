import React from 'react';

const Reviewitem = (props) => {
    const {name,quantity,key,price} = props.product
     
    return (
        <div>
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Price:{price}</p>
            <br></br>
            <button onClick={() =>props.removeProduct(key)}className="button-primary">Remove</button>
        </div>
    );
};

export default Reviewitem;