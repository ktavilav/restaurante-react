// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/restaurants" element={<RestaurantList/>} />
          <Route path="/restaurants/:id" element={<RestaurantDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
