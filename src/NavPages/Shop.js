import React from 'react'
import './Shop.css'
import product from '../Images/data'
import Items from '../NavPages/Items'


const Shop = () => {
  return (
    <div className="pro">
        <h1>Shop Now</h1>
        <hr />
        <div className="proitem">
            {product.map((items,i)=>{
                return <Items key={i} id={items.id} name={items.name} image={items.image} newprice={items.newprice} oldprice={items.oldprice} />
            })}
        </div>
    </div>
  )
}

export default Shop