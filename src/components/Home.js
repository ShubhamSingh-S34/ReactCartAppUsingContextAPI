import React, { useContext, useState } from 'react'
import {Cart} from '../Context.js'
import Product from './Product';
import './styles.css';
const { faker } = require('@faker-js/faker');


faker.seed(100);
const Home = () => {
    const {cart, setCart} =useContext(Cart)

    const productsArray=[... Array(20)].map(()=>({
        id:faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image: faker.image.avatar(),
    }));
    
    const [products, setProducts]=useState(productsArray);
    console.log(cart)
  return (
    <div className='productContainer'>
        {products.map((prod)=>(
            <Product key={prod.id} prod={prod} cart={cart} setCart={setCart}/>
        ))}
    </div>
  )
}

export default Home