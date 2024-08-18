import React ,{useState} from "react"; 
import style from './CartItem.module.css'

export default function CartItem({ items ,removeHandler }) {   
    

        const showItems =items.map((item, id) => (
            <div key={id} className ={style.item} >                  
                <img src={item.image} alt={item.name} className={style.itemImg} />     
                <div className={style.lable}>
                <h3>{item.name}</h3>
                <h4>{item.price}$</h4>
                </div>
                <button  className={style.removeBtn} onClick={()=>removeHandler(id)} >X</button>
            </div>
        ))


    return ( 
        <div>
        <div>
            {showItems}
        </div>
        </div>
    );
}
