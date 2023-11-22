import React from 'react'
import './Items.css'

const Items = (props) => {
  return (
      <div className="items">
        <img className='jimg' src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="price">
          <div className="newprice">
            Rs. {props.newprice}
          </div>
          <div className="oldprice">
            Rs. {props.oldprice}
          </div>
        </div>
      </div>
    )
}

export default Items