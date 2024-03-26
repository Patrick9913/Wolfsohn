import { Route, Routes, BrowserRouter, Link, Navigate } from 'react-router-dom'
import './App.css'
import { List } from './components/list/List'
import { WolfsohnPC } from './components/main/WolfsohnPC'
import { Retiro } from './components/retiro/Retiro'
import { useState } from 'react'

function App() {

  const [ user, setUser ] = useState (
    {
      state: false
    }
  )

  const isLog = user.state;

  console.log(isLog)
  
  const userChange = () => {
    setUser (
      {
        state: true
      }
    )
  }

  return (
    <BrowserRouter>
    { isLog 
    ? 
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/Retiro' element={<Retiro />} />
        <Route path='/' element={<Navigate to="/List" />} />
      </Routes> 
    : 
      <Routes>
        <Route path='/' element={<Navigate to="/Login"/>} />
        <Route path='/Login' element={<WolfsohnPC userChange={userChange} />} />
      </Routes>
      }
    </BrowserRouter>
  )
}

export default App
