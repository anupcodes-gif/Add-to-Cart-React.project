import React from 'react'
import '../style/header.css'
import { Link } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'
import { useSelector } from 'react-redux'

export const Header = () => {
  const { cartItems } = useSelector((state) => state.cart)

  return (
    <nav>
      <h2>Go-shopping</h2>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/cart'>
          <FiShoppingBag />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  )
}
