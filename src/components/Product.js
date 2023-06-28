import React, { useContext } from 'react'
import { Cart as CartContext } from '../Context'
function Product({prod}) {
    const {cart, setCart}= useContext(CartContext);
    return (
    <div className='products'>
        <img src={prod.image} alt ={prod.name} />
        <div className='productDesc'>
            <span style={{fontWeight:700}}>{prod.name}</span>
            <span>Rs. {prod.price}</span>
        </div>

        {cart.includes(prod)?
        (<button className='add' onClick={()=>{setCart(cart.filter((c)=>c.id!==prod.id))}}>Remove from cart</button>):
        (<button className='add' onClick={()=>{setCart([...cart, prod])}}>Add to Cart</button>)
        }

        
        
    </div>
  )
}

export default Product