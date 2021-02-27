import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart'
import './Shop.css'

const Shop = () => {
    
    const firstTen = fakeData.slice(0,10)
    const [product, setProduct] = useState(firstTen)
    const [cart, setCart] = useState([])


    const handleAddProduct = (product) =>{
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart);

    }
    console.log(product)

    return (
        <div className="container">
            <div className="shop-container">
                {
                     product.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={pd}></Product>)
                }
            </div>
            <div className="card-container">
            <Cart cart={cart}></Cart>
            </div>
            
           
        </div>
    );
};

export default Shop;