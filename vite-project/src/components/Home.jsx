import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>Home

      {/* <button onClick={()=>navigate('/orders',{replace:true})}>Place order</button> */}
      <button onClick={()=>navigate('/orders',{state:{product:'iphone'}})}>Place order</button>
    </div>
  )
}

export default Home