import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <h1>Products</h1>
      <div>
        <input type="text" name="" id="" />
        </div>
        <nav>
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
            </nav>  
            <Outlet/>
    </>
  )
}

export default Products