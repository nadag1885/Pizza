import './App.css';
import Item from '../Item/item';
import Data from '../assets/data.json';
import Cart from '../Cart/Cart';
import { useState } from'react';

function App() {
  const [cart, setCart] = useState([]); 

  const addToCart = (item) => {
      const newCart = [...cart , item]
      setCart(newCart);
      console.log(newCart);    
  }
  const removeFromCart = (id) => {
    console.log(id);
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    console.log(updatedCart);   

  }
  return (
    <div className="App">    
    <div className="Header" >PIZZA..!</div>
    <div className='content'>
      <Item Data={Data} addToCart={addToCart}/>
      <Cart cart={cart} removeHandler={removeFromCart}/>
      </div>
    </div>
  );
}

export default App;
