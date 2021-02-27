import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {name, img,seller,price, stock } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="productName">
                <h3>{name}</h3>
                <br/>
                <p>By {seller}</p>
                <h4>${price}</h4>
                <p>{stock}</p>
                <button 
                    className="addBtn"
                    onClick={() => props.handleAddProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;