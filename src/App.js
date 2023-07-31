import React from 'react'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import MyComponent from './components/MyCompnent'
import Login2 from './components/test/Login'
const App = () => {
  return <div>
    <Navbar/>
    <MyComponent/>
    <Login/>
    <Login2/>
    <Register/>
  </div>
  
}

export default App