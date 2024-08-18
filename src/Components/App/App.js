import './App.css';
import Item from '../Item/item';
import Data from '../assets/data.json';
import Cart from '../Cart/Cart';
import { useState } from'react';
import Modal from '../modal/Modal';

function App() {
  const [cart, setCart] = useState([]); 
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setCart([]);
  }

  const addToCart = (item) => {
      const newCart = [...cart , item]
      setCart(newCart);
      console.log(newCart);    
  }
  const removeFromCart = (id) => {
    console.log(id);
    // const updatedCart = cart.filter((item) => item.name === removedItem.name);
    const updatedCart = [...cart.slice(0, id), ...cart.slice(id + 1)]
    setCart(updatedCart);
    console.log(updatedCart);   

  }
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);


  return (
    <div className="App">    
    <div className="Header" >PIZZA..!</div>
    <div className="itemsContainer">
      <Item Data={Data} addToCart={addToCart}/></div>
      <Cart cart={cart} removeHandler={removeFromCart} showModal={showModal} 
        setShowModal={setShowModal} handleOpenModal={handleOpenModal}  totalPrice={totalPrice} />           
        {showModal &&
      <Modal show={showModal} onClose={handleCloseModal}></Modal>}
    </div>
  );
}

export default App;
