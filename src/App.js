import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ClickMePage from './pages/click-me';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/click-me' element={<ClickMePage/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;
