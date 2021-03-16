import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Reviewitem from '../reviewitem/Reviewitem';
import './Revew.css'



const Revew = () => {

    const [cart, setCart] = useState([])
    const history = useHistory()
    const ProceedCheckoutHandler = () => {
        history.push('/shipment')
     
    }

    const removeProduct = (productkey) => {
        const newCart = cart.filter(pd => pd.key !== productkey)
        setCart(newCart);
        removeFromDatabaseCart(productkey)
    }

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product
        });
        setCart(cartProducts)
    }, [])

    return (
        <div className="reviewItem">
            <div>
                <h2>cart item: {cart.length}</h2>
                {
                    cart.map(pd => <Reviewitem product={pd} key={pd.key} removeProduct={removeProduct}></Reviewitem>)
                }

            </div>
            <div>
                <h3>hello</h3>
                <Cart cart={cart}>
                    <button onClick={() => ProceedCheckoutHandler()}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Revew;