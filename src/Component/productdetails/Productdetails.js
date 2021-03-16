import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';


const Productdetails = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey)

    return (
        <div>
            <h3>{productKey}this is product details</h3>
            <Product showAddToCart={false} product={product}/>
        </div>
    );
};

export default Productdetails;