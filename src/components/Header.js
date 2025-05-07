import React, { useState } from 'react';

const Header = () => {
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

  const showTooltip = (e, text) => {
    setTooltip({ visible: true, text, x: e.clientX, y: e.clientY + 10 });
  };

  const hideTooltip = () => {
    setTooltip({ visible: false, text: '', x: 0, y: 0 });
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <img
          src="https://i.postimg.cc/RCDjFf3C/patria2-removebg-preview-1.png"
          alt="Patria 2.0 Logo"
          className="h-10 mr-2"
        />
        <h1 className="text-xl font-bold">Patria 2.0</h1>
      </div>
      <div className="flex space-x-4">
        {['Inicio', '1x10', 'Waku Pay', 'Salud', 'Directorio', 'Alertas', 'Trámites', 'Market Social'].map((section) => (
          <a
            key={section}
            href="#"
            className="hover:bg-blue-700 p-2 rounded"
            onMouseEnter={(e) => showTooltip(e, section)}
            onMouseLeave={hideTooltip}
          >
            {section}
          </a>
        ))}
      </div>
      {tooltip.visible && (
        <div className="tooltip" style={{ top: tooltip.y, left: tooltip.x }}>
          {tooltip.text}
        </div>
      )}
    </header>
  );
};

export default Header;