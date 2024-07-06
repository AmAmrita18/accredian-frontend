import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
      </Route>
    </Routes>
  </Router>
)
