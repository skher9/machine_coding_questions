import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TictacToe from './Tic_Tac_Toe/TictacToe.jsx'
import GridLights from './Grid Lights/GridLights.jsx';
import Home from './Home.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TicTacToe/" element={<TictacToe />} />
          <Route path="/GridLights" element={<GridLights />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
