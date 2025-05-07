import React from 'react';

const NewsCard = ({ title, summary, image, category, tags }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-2" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-600">{summary}</p>
    <div className="flex space-x-2 mt-2">
      {tags.map((tag) => (
        <span key={tag} className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded">
          {tag}
        </span>
      ))}
    </div>
    <p className="text-sm text-gray-500 mt-2">Categoría: {category}</p>
  </div>
);

export default NewsCard;