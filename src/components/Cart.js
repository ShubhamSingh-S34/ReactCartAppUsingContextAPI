import React, { useContext, useEffect, useState } from 'react'
import Product from './Product';
import { Cart as CartContext} from '../Context';

const Cart = () => {

    const {cart, setCart}= useContext(CartContext);
    const [totalAmount,setTotalAmount]= useState(0);
    useEffect(()=>{
        var amt=0;
        cart.map((prod)=>{
            amt+=parseFloat(prod.price);
        })
        return setTotalAmount(amt);
    },[cart]);
  return (
    <div>
        <span style={{fontSize:30}}> MY CART</span>
        <br />
        <span style={{fontSize:30}}>Total Rs. {totalAmount}</span>
        <div className='productContainer'>
        {cart.map((prod)=>(
            <Product key={prod.id} prod={prod} cart={cart} setCart={setCart}/>
        ))}
    </div>
    </div>
    
  )
}

export default Cart