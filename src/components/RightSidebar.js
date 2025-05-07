import React from 'react';

const RightSidebar = () => (
  <div className="w-1/4 bg-gray-100 p-4">
    <h2 className="text-lg font-semibold mb-4">Publicidad</h2>
    <img
      src="https://th.bing.com/th/id/R.843c51db0cd09ca3a3d381abba73e87b?rik=26oS5mpOJMpjXQ&pid=ImgRaw&r=0"
      alt="Ad"
      className="w-full h-40 object-cover rounded mb-4"
    />
    <h2 className="text-lg font-semibold mb-4">Estadísticas</h2>
    <p className="text-sm text-gray-600">Inflación: 2.5% (BCV)</p>
    <p className="text-sm text-gray-600">Clima: 28°C, soleado</p>
  </div>
);

export default RightSidebar;