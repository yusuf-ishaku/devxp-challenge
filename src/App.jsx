import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/home';

function App() {
  let images = document.querySelectorAll(".images");
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home cant ={images}></Home>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
