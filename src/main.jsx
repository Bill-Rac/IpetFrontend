import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from "./components/Navbar/Navbar"
import Navbar2 from "./components/Navbar2/Navbar2"
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './globalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <App />
      <Navbar />
      <Navbar2 />
    </Router>
  </React.StrictMode>
)
