import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import restaurantesFavoritos from '../components/RestaurantData.json';


const openMapInNewWindow = (lat, lng) => {
  const url = `https://maps.app.goo.gl/8zUBxmq7eRuXTKhL7 https://www.google.com/maps/embed/v1/place?q=${lat},${lng}`;
  window.open(url, '_blank', 'width=600,height=400');
};

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurante = restaurantesFavoritos.find((rest) => rest.id === parseInt(id));

  useEffect(() => {
    document.title = `Detalles del Restaurante ${id}`;
  }, [id]);

  if (!restaurante) {
    return <div>No se encontró el restaurante</div>;
  }

  const [lat, lng] = restaurante.mapa.split(',');

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Detalles del Restaurante {id}</h1>
      <div className="p-4 border border-gray-300 rounded-md">
        <center>
          <img
            src={restaurante.imagen}
            alt={restaurante.nombre}
            className="w-full mb-2 rounded-md"
            style={{ width: '100%', maxWidth: '400px' }}
          />
        </center>
        <h2 className="text-xl font-bold mb-2">{restaurante.nombre}</h2>
        <p className="text-gray-600">{restaurante.categoria}</p>
        <p className="text-yellow-500">Calificación: {restaurante.calificacion}</p>
        <p className="mt-4">{restaurante.detalles}</p>
        <center><iframe id="map-canvas" class="map_part" width="600"  height="450"  frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=England, UK&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></center>
      </div>
    </div>
  );
};

export default RestaurantDetails;
