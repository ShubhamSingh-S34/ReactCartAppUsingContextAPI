import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
function Header() {
  return (
    <div>
        <span className='header'>Context API tutotial </span>
        <ul className='nav'>
            <li>
            <Link to="/">Home Page</Link>
            </li>
            <li>
            <Link to="/cart">Cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header