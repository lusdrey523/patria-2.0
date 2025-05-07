import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black';
  }, [darkMode]);

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default App;