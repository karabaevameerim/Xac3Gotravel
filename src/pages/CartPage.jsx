import React from 'react'
import Cart from '../components/cart/Cart'
import { useAuth } from '../contexts/AuthContextProvider'

const CartPage = () => {
  const {user : {email}} = useAuth();
  
  return (
    <div>
      {email ? <Cart/> : null}
      </div>
  )
}

export default CartPage