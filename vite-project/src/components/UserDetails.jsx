import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const params = useParams()
  console.log(params);
  
  return (
    <div>
        <h1>UserDetails {params.userId}</h1>
    </div>
  )
}

export default UserDetails