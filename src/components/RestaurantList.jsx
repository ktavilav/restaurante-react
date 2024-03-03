// RestaurantList.js
import React from 'react';
import Slider from 'react-slick';

import { Link } from 'react-router-dom';
import restaurantesFavoritos from '../components/RestaurantData.json'

const RestaurantList = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
            <center><img src={restaurante.imagen} alt={restaurante.nombre} className="w-full mb-2 rounded-md" style={{ width: '100%', maxWidth: '400px' }}/></center>
            <Link to={`/restaurant/${restaurante.id}`} className="text-blue-500">Ver Detalles</Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RestaurantList;
