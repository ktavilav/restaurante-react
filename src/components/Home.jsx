// Home.js
import React from 'react';
import Slider from 'react-slick';

import { Link } from 'react-router-dom';

const Home = () => {
  const restaurantesFavoritos = [
    { id: 1, nombre: 'Restaurante A', categoria: 'Comida Rápida', calificacion: 4.5 },
    { id: 2, nombre: 'Restaurante B', categoria: 'Pizza', calificacion: 5 },
    { id: 3, nombre: 'Restaurante C', categoria: 'Hamburguesas', calificacion: 4 },
    { id: 4, nombre: 'Restaurante D', categoria: 'Sushi', calificacion: 4.8 },
    { id: 5, nombre: 'Restaurante E', categoria: 'Tacos', calificacion: 3.5 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">¡Tus Restaurantes Favoritos!</h1>
      <Slider {...settings} className="mb-8">
        {restaurantesFavoritos.map(restaurante => (
          <div key={restaurante.id} className="p-4">
            <h2 className="text-xl font-bold mb-2">{restaurante.nombre}</h2>
            <p className="text-gray-600">{restaurante.categoria}</p>
            <p className="text-yellow-500">Calificación: {restaurante.calificacion}</p>
            <Link to={`/restaurants/${restaurante.id}`} className="text-blue-500">Ver Detalles</Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
