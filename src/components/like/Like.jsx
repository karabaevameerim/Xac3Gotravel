import React, { useEffect } from 'react'
import { useLike } from '../../contexts/LikeContextProvider'

const Like = () => {
    const {getLike, like, deleteLikeProduct,} = useLike();
    useEffect(()=>{
        getLike();
    },[])
  return (
    <div>
    <div className="cart">
<h2>Понравившиеся</h2>
<ul className="cart-items">
   {like?.products.map((row,index)=>(
       console.log(row),
<li className="cart-item" key={index}>
<div className="item-name">{row.item.location}</div>
{/* <input className="item-price" value={row.count} min={1} onChange={(e)=>changeProductCount(e.target.value, row.item.id)}/> */}
<div className="item-price">{row.item.price} $ </div>
<div className="item-price">{row.subPrice} $ </div>
<button className="remove-button" onClick={()=>deleteLikeProduct(row.item.id)}>Удалить</button>
</li>
   ))}
</ul>
</div>
</div>
  )
}

export default Like