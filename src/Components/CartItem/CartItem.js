import React ,{useState} from "react"; 
import style from './CartItem.module.css'

export default function CartItem({ items ,removeHandler }) {   
    

        const showItems =items.map((item, id) => (
            <div key={id} className ={style.item} >                  
                <img src={item.image} alt={item.name} className={style.itemImg} />
                <h3>{item.name}</h3>
                <h5>{item.price}$</h5>
                <button  className={style.removeBtn} onClick={()=>removeHandler(id)} >Remove</button>
            </div>
        ))


    return (
        <div>
            {showItems}
        </div>
    );
}
