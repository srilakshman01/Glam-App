import React, { useState } from "react"
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    const [menu,setMenu] = useState("home");
  return (
    <div className="navbar">
        <ul className="menu">
            <li onClick={()=>{setMenu("home")}}><b><Link to='/' style={{textDecoration: 'none',color:'palevioletred'}}>Home</Link>{menu==='home'?<hr/>:<></>}</b></li>
            <li onClick={()=>{setMenu("shop")}}><b><Link to='/shop' style={{textDecoration: 'none',color:'palevioletred'}}>Shop</Link>{menu==='shop'?<hr/>:<></>}</b></li>
            <li onClick={()=>{setMenu("about")}}><b><Link to='/about'style={{textDecoration: 'none',color:'palevioletred'}}>About</Link>{menu==='about'?<hr/>:<></>}</b></li>
        </ul>
        <div className="logo">
            <center><p><b>V</b>OGUE<b>V</b>ILLA</p></center>
        </div>
        <div className="navbutton">
            <Link to='/loginsing'><button className="but" >Login</button></Link>
            <Link to='/cart'><img className='likecart' src="https://cdn-icons-png.flaticon.com/128/5337/5337564.png" alt=""></img></Link>
        </div>
    </div>
  )
}

export default Navbar