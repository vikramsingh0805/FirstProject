import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {
  const [searchparams,setSearchparams] = useSearchParams()
  console.log(searchparams.get('filter'));
  const showActiveUser = searchparams.get('filter')==='active'
  return (
    <div>

        <h1>User1</h1>
        <h1>User2</h1>
        <h1>User3</h1>
        <Outlet/>
        <div>
          <button onClick={()=>setSearchparams({filter:"active"})}>Active Users</button>
          <button onClick={()=>setSearchparams({})}>Reset Filters</button>
        </div>
        {
          showActiveUser ? <h2>Showing active users</h2>: <h2>Showing all users</h2>
        }
    </div>
  )
}

export default Users