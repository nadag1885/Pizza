import React from "react";
import Data from "../data.json";
import './Item.css'
import { useState } from "react";




export default function Item({Data ,addToCart}) {
    


    const items = Data.map((item ,id)=>{
        return  (
        <div key={id} className="item">
        <img src={item.image} alt={item.name} className="img"/>
        <button  className="addBtn" onClick={()=>addToCart(item)} >Add to Cart</button>
        <h2>{item.name}</h2>
        <h3>{item.price}$</h3>
        </div>
    )});
    return (
        <div className="items">
            {items}
        </div>
    );
}