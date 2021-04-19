import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    // const data = (fakeData[0]);
    const product = {};
    const handleAddProduct = () => {
        // console.log('HandleAddProducts Clicked') ;
        // console.log(data);
        fetch('https://ema-jhon-server-site.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div>
            <form action="">
                <p><span>Name :</span><input type="text" /></p>
                <p><span>Price :</span><input type="text" /></p>
                <p><span>Quantity :</span><input type="text" /></p>
                <p><span>Product Image</span><input type="file" /></p>
                <button onClick={handleAddProduct}>Add Product</button>
            </form>

        </div>
    );
};

export default Inventory;