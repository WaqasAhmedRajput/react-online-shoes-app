import React from 'react'
import shoes from '../data.json';
import styles from '../components/Product.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Products = () => {

    return (
        <div className={styles.container}>
            {Object.keys(shoes).map(keyName => {
                const shoe = shoes[keyName];
                return (<div><Link key={keyName} to={`/products/${keyName}`}>
                    <img className="product_img" src={shoe.img} alt={shoe.img} width="300" height="200" />
                    <h4>{shoe.name}</h4>
                </Link></div>)
            })}
        </div >
    );
}

export default Products;