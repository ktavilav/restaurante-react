// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <Link to="/" className="text-white font-bold">Inicio</Link>
      <Link to="/restaurants" className="ml-4 text-white font-bold">Lista de Restaurantes</Link>
    </nav>
  );
};

export default Navbar;
