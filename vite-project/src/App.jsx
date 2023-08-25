import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const LazyAbout = React.lazy(()=>import ('./components/About'))
// import About from './components/About'

import Navbar from './components/Navbar'
import Orders from './components/Orders'
import Nomatchpage from './components/Nomatchpage'
import Products from './components/Products'
import Featured from './components/Featured'
import New from './components/New'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'

function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={
        <React.Suspense fallback='loading....'>
          <LazyAbout/>
          </React.Suspense>
        }/>
        <Route path='/orders' element={<Orders/>}/>
    
        <Route path='/products' element={<Products/>}>
        <Route index element={<New/>}/>
        <Route path='featured' element={<Featured/>}/>
        <Route path='new' element={<New/>}/>
        </Route>
        <Route path='/users' element={<Users/>}>
        <Route path=':userId' element={<UserDetails/>}/>
        <Route path='admin' element={<Admin/>}/>
        </Route>


       
        <Route path='*' element={<Nomatchpage/>}/>
        
      </Routes>
     
    </>
  )
}

export default App
