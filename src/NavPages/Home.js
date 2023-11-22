import React from 'react'
import { useState } from 'react';
import './Home.css'
import Girl from '../Images/shoppingmodel.png';
import { Link } from 'react-router-dom'

const Home = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className="homeg">
      <div className="home1">
        <h2>NEW COLLECTIONS AVAILABLE</h2>
      <div>
        <h3>Limited Deals!!</h3>
      </div>
      <div className="latest">
      <ul style={{listStyle:'none'}}>
      <li onClick={()=>{setMenu("shop")}}><b><Link to='/shop' style={{textDecoration: 'none',color: 'white'}}>Shop Now</Link>{menu==='shop'?<hr/>:<></>}</b></li>
      </ul>

      </div>
      </div>
      <div className="home2">
        <img className='shgirl' src={Girl} alt="" />
      </div>
    </div>
  )
}

export default Home