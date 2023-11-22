import React from 'react'
import './Copyright.css'

const Copyright = () => {
const year = new Date();
return (
    <nav>

    <footer> <b>&copy;</b> Vogue Villa <b>{year.getFullYear()}</b> </footer>
    </nav>
)
}

export default Copyright