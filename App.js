import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import ProtectedPage from './ProtectedPage';
import Unauthorized from './Unauthorized';
import Header from "./Header.js"
import Home from "./Home.js"

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />  
          <Route path="/registration" element={<Registration />} />  
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
  );
}

export default App;
