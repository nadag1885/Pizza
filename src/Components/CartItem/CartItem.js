import React, { useEffect, useState } from "react";
import style from "./CartItem.module.css";

export default function CartItem({ items, removeHandler }) {
  const [totalItemCount, setTotalItemCount] = useState(0);

  // Function to increment item count
  const incHandler = (item) => {
    item.count = (item.count || 1) + 1;
    setTotalItemCount(totalItemCount + 1); // Update total count
    console.log(item.count);
  };

  // Function to decrement item count
  const decHandler = (item) => {
    if (item.count > 1) {
      item.count -= 1;
      setTotalItemCount(totalItemCount - 1); // Update total count
      console.log(item.count);
    } else {
      removeHandler(item.id);
    }
  };

  const totalPrice = items.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0
  );

  useEffect(() => {
    const total = items.reduce((acc, item) => acc + (item.count || 1), 0);
    setTotalItemCount(total);
  }, [items]);

  // Map through the items to render them
  const showItems = items.map((item, id) => (
    <div key={id} className={style.item}>
      <img src={item.image} alt={item.name} className={style.itemImg} />
      <div className={style.lable}>
        <h3>{item.name}</h3>
        <h4>{item.price}$</h4>
        <div>
          <button
            className={style.btn}
            onClick={() => {
              decHandler(item);
            }}
          >
            -
          </button>
          <span className={style.count}>{item.count || 1}</span>
          <button
            className={style.btn}
            onClick={() => {
              incHandler(item);
            }}
          >
            +
          </button>
        </div>
      </div>
      <button
        className={style.removeBtn}
        onClick={() => removeHandler(item.id)}
      >
        X
      </button>
    </div>
  ));

  return (
    <div>
      <div className="totalPrice">Total :{totalPrice}</div>
      <h2>Total Items: {totalItemCount}</h2> {/* Display total item count */}
      <div>{showItems}</div>
    </div>
  );
}
