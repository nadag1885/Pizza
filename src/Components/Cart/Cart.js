import React  from 'react';
import './Cart.css'
import { useState , useEffect} from 'react';
import CartItem from '../CartItem/CartItem';

export default function Cart({cart ,removeHandler}) {

    const [isEmpty, setIsEmpty] = useState(true); 
    useEffect(() => {
        setIsEmpty(cart.length === 0);
    }, [cart]);                           
    
    return (
        <div className='cart'>
            <div className='cartCounter' >
            <img src={require('../assets/noun-cart-7102763.png')} className='cartLogo'></img>
            <h1 className='counter'>{cart.length}</h1> 
            </div>
            {isEmpty &&
            <div className='empty'>
            <img src={require('../assets/noun-pizza-7111304.png')} className='pizzaCart'></img>
            <h2>Your added items will appear here</h2>
            </div>}
            {!isEmpty &&
                <CartItem items={cart} removeHandler={removeHandler} ></CartItem>
            }
        </div>
    )
}