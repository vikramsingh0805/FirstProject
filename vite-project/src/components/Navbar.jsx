import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const activeStyle = ({isActive})=>{
        return {
            fontWeight:isActive ? "bolder" : "normal",
            color:isActive ? "red" : "black",
            textDecoration: isActive ? "none" : "underline"
        }
    }
  return (
        <nav>
            {/* <NavLink style={activeStyle} to={'/'}>Home</NavLink>
            <NavLink style={activeStyle} to={'/about'}>About</NavLink> */}
                 <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/products'}>Products</NavLink>

        </nav>
  )
}

export default Navbar