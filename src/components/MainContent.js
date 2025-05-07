import React from 'react';
import NewsCard from './NewsCard';
import SocialPost from './SocialPost';
import CreatePost from './CreatePost';

const MainContent = () => {
  const news = [
    {
      title: 'Gobierno lanza nuevo bono escolar',
      summary: 'El bono estará disponible para familias con hijos en primaria.',
      image: 'https://via.placeholder.com/300',
      category: 'Educación',
      tags: ['✅ Verificada', '🔥 Tendencia'],
    },
    {
      title: 'Alerta por lluvias en Caracas',
      summary: 'Se esperan lluvias fuertes durante las próximas 48 horas.',
      image: 'https://via.placeholder.com/300',
      category: 'Clima',
      tags: ['🌀 Urgente'],
    },
  ];

  const posts = [
    {
      user: 'Juan Pérez',
      content: '¡Recibí mi CLAP a tiempo! #GraciasPatria',
      media: 'https://via.placeholder.com/300',
      location: 'Caracas, VZ',
      tags: ['#CLAP', '#Comunidad'],
    },
    {
      user: 'María Gómez',
      content: 'Necesitamos arreglar esta calle #ReporteCiudadano',
      media: null,
      location: 'Maracaibo, VZ',
      tags: ['#Reporte', '#Comunidad'],
    },
  ];

  return (
    <div className="w-2/4 p-4">
      <CreatePost />
      {news.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
      {posts.map((post, index) => (
        <SocialPost key={index} {...post} />
      ))}
    </div>
  );
};

export default MainContent;