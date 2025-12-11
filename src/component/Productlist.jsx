import React from 'react'
import productList from '../data/productsData'
function Productlist({addToCart}) {

  return (
    <div>
      {productList.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price} THB</p>
          <button onClick={()=>addToCart(item)}>Add to Cart</button>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Productlist
