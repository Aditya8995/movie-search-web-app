import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movie from './pages/Movie';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movie/:id" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

