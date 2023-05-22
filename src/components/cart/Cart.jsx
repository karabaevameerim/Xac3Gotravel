import React, { useEffect } from 'react' 
import "./Cart.css" 
import { useCart } from '../../contexts/CartContextProvider' 
import { useNavigate } from 'react-router-dom' 
import CreditCard from '../CreditCard/CreditCard' 
 
const Cart = () => { 
  const navigate = useNavigate(); 
    const {getCart, 
        cart, deleteCartProduct, changeProductCount} = useCart() 
 
        useEffect(() => { 
            getCart(); 
          }, []); 
 
  return ( 
    <div>   
         <div className="cart"> 
    <h2>Корзина:</h2> 
    <ul className="cart-items"> 
        {cart?.products.map((row,index)=>( 
            console.log(row), 
  <li className="cart-item" key={index}> 
  {/* <img src={row.item.picture} alt=""/> */}
  <div className="item-name">{row.item.location}</div> 
  <input className="item-price" value={row.count} min={1} onChange={(e)=>changeProductCount(e.target.value, row.item.id)}/> 
  <div className="item-price">{row.item.price} сом </div>    
  <div className="item-price">{row.subPrice} cом </div>        
  <button className="remove-button" onClick={()=>deleteCartProduct(row.item.id)}>❌</button> 
</li> 
        ))} 
    </ul> 
    <div className="total">Общая сумма: {cart.totalPrice}</div> 
    <button onClick={() => { 
      navigate("/creditCard") 
    }}>BUY NOW</button> 
  </div> 
    </div> 
  ) 
} 
 
export default Cart