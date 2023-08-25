import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

function Orders() {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
  return (
    <div>Orders
        <button onClick={()=>navigate(-2)}>Back to Home</button>
        <h1>{location.state.product}</h1>
    </div>
  )
}

export default Orders