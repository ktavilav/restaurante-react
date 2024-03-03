// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<RestaurantList/>} />
          <Route path="/restaurant/:id" element={<RestaurantDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
