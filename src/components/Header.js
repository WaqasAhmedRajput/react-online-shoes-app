import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './Products';
import ProductItem from './ProductItem';
import About from './About';
import styles from './Header.module.css';


const Header = () => {

    return (
        <div className={styles.headerContainer}>
            <Router>
                <ul className={styles.nav}>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='/products'>PRODUCTS</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Products} />
                    <Route path="/about" component={About} />
                    <Route exact path="/products" component={Products} />
                    <Route path="/products/:id" component={ProductItem} />
                    <Route path="*" component={() => <h2>404 NOT FOUND</h2>} />
                </Switch>
            </Router>

        </div >
    )
}

export default Header
