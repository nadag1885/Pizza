import "./App.css";
import Item from "../Item/item";
import Data from "../assets/data.json";
import Cart from "../Cart/Cart";
import { useState } from "react";
import Modal from "../modal/Modal";

function App() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setCart([]);
  };

  const addToCart = (itemToAdd) => {
    const existingItem = cart.find((item) => item.id === itemToAdd.id);

    if (existingItem) {
      // Create a new cart array with updated item count
      const updatedCart = cart.map((item) =>
        item.id === itemToAdd.id ? { ...item, count: item.count + 1 } : item
      );
      setCart(updatedCart); // Update state with new array
    } else {
      // Add new item to cart with count initialized to 1
      setCart([...cart, { ...itemToAdd, count: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    console.log(id);
    const updatedCart = cart.filter((item) => item.id != id);
    // const updatedCart = [...cart.slice(0, id), ...cart.slice(id + 1)]
    setCart(updatedCart);
    console.log(updatedCart);
  };

  return (
    <div className="App">
      <div className="Header">PIZZA..!</div>
      <div className="content">
        <div className="itemsContainer">
          <Item Data={Data} addToCart={addToCart} />
        </div>
        <Cart
          cart={cart}
          removeHandler={removeFromCart}
          showModal={showModal}
          setShowModal={setShowModal}
          handleOpenModal={handleOpenModal}
        />
      </div>
      {showModal && <Modal show={showModal} onClose={handleCloseModal}></Modal>}
    </div>
  );
}

export default App;
