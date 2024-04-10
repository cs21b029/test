import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>K Bhargava Chaitanya</h1>
        <div className="Links">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            {/* <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link> */}
        </div>
    </div>
  )
}

export default Navbar