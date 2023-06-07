import React from 'react'
import '../style/home.css'
import { product } from '../helper/Product'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export const Home = () => {
  const dispatch = useDispatch()

  const handler = (options) => {
    dispatch({ type: 'addToCart', payload: options })
    dispatch({ type: 'calculatePrice' })
    toast.success('Added to cart')
  }
  return (
    <div className='home'>
      {product.map((items) => {
        const { img, id, name, price, desc } = items
        return (
          <div className='item' key={id}>
            <img src={img} alt='pictures' />
            <h1>{name}</h1>
            <h3>{desc}</h3>
            <p>${price}</p>
            <button
              className='add-to-cart'
              onClick={() =>
                handler({ img, id, name, price, desc, quantity: 1 })
              }
            >
              Add to cart
            </button>
          </div>
        )
      })}
    </div>
  )
}
