import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  )
}

export default App
