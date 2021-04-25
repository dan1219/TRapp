import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'


import axios from 'axios'


function App() {
  return(
    <BrowserRouter>
        <Navbar/>
        <AppRouter />
    </BrowserRouter>

  )
}

export default App;
