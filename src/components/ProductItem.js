import React from 'react';
import Shoes from '../data.json';
import { useHistory, useParams } from "react-router-dom";


import styles from './ProductItem.module.css';


function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];
    console.log(shoe)
    const history = useHistory();
    //Go Back Previous Page Function
    function goBackHander() {
        history.goBack();
    }

    if (!shoe)
        return <h2>Product Not Found</h2>

    return (
        <div>
            <button className={styles.btn} onClick={goBackHander}>&#8592;</button>
            <div className={styles.container}>
                <img className="product_img" alt="IMG" src={shoe.img} width="400px" height="300px" />
                <h4>{shoe.name}</h4>
            </div>

        </div>
    )
}

export default ProductItem
