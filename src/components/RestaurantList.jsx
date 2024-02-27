// RestaurantList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    // Simulamos la obtención de datos de una API
    const fetchData = async () => {
      const data = [
        { id: 1, nombre: 'Restaurante A', categoria: 'Comida Rápida', calificacion: 4.5 },
        { id: 2, nombre: 'Restaurante B', categoria: 'Pizza', calificacion: 5 },
        { id: 3, nombre: 'Restaurante C', categoria: 'Hamburguesas', calificacion: 4 },
        { id: 4, nombre: 'Restaurante D', categoria: 'Sushi', calificacion: 4.8 },
        { id: 5, nombre: 'Restaurante E', categoria: 'Tacos', calificacion: 3.5 },
      ];
      setRestaurantes(data);
    };

    fetchData();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Lista de Restaurantes</h1>
      <ul className="list-none p-0">
        {restaurantes.map(restaurante => (
          <li key={restaurante.id} className="mb-4">
            <h2 className="text-xl font-bold mb-2">{restaurante.nombre}</h2>
            <p className="text-gray-600">{restaurante.categoria}</p>
            <p className="text-yellow-500">Calificación: {restaurante.calificacion}</p>
            <Link to={`/restaurants/${restaurante.id}`} className="text-blue-500">Ver Detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;

