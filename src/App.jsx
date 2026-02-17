import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
