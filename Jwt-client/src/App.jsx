import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Private from './Components/Private'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />

          <main className="appBg">
            <Routes>
              <Route path='/' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/private' element={<Private />}/>
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
