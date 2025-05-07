import React from 'react';

const Sidebar = () => (
  <div className="w-1/4 bg-gray-100 p-4">
    <h2 className="text-lg font-semibold mb-4">Accesos Rápidos</h2>
    <ul>
      <li><a href="#" className="text-blue-600 hover:underline">Bonos Disponibles</a></li>
      <li><a href="#" className="text-blue-600 hover:underline">Encuestas Activas</a></li>
      <li><a href="#" className="text-blue-600 hover:underline">Protección Social</a></li>
    </ul>
    <h2 className="text-lg font-semibold mt-4 mb-4">Perfil</h2>
    <ul>
      <li><a href="#" className="text-blue-600 hover:underline">Editar Datos</a></li>
      <li><a href="#" className="text-blue-600 hover:underline">Programas Activos</a></li>
      <li><a href="#" className="text-blue-600 hover:underline">Seguridad</a></li>
    </ul>
  </div>
);

export default Sidebar;