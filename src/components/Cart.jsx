import React from 'react'
import '../style/cart.css'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

export const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  )
  const dispatch = useDispatch()
  const increment = (id) => {
    dispatch({ type: 'addToCart', payload: { id } })
    dispatch({ type: 'calculatePrice' })
  }
  const decrement = (id) => {
    dispatch({ type: 'decrement', payload: id })
    dispatch({ type: 'calculatePrice' })
  }
  const deleteHandler = (id) => {
    dispatch({ type: 'deleteFromCart', payload: id })
    dispatch({ type: 'calculatePrice' })
  }

  return (
    <div className='cart'>
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              img={i.img}
              name={i.name}
              price={i.price}
              desc={i.desc}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              increment={increment}
              decrement={decrement}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal: ${subTotal}</h2>
        <h2>Shiping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>total: ${total}</h2>
      </aside>
    </div>
  )
}

const CartItem = ({
  id,
  img,
  name,
  price,
  desc,
  qty,
  increment,
  decrement,
  deleteHandler,
}) => {
  return (
    <div className='cart-items'>
      <img src={img} alt='pic' />
      <article>
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>${price}</p>
      </article>
      <div className='added'>
        <button
          onClick={() => {
            decrement(id)
          }}
        >
          -
        </button>
        <p>{qty}</p>
        <button
          onClick={() => {
            increment(id)
          }}
        >
          +
        </button>
      </div>
      <AiFillDelete className='dlt-icon' onClick={() => deleteHandler(id)} />
    </div>
  )
}
