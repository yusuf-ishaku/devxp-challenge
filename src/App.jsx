// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { Home } from './pages/home';
import { SignUpForm } from './pages/SignUpForm';

function App() {
  // let images = document.querySelectorAll(".images");
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SignUpForm></SignUpForm>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
