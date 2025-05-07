import React, { useState } from 'react';

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');

  const handlePublish = () => {
    if (postContent.trim()) {
      alert(`Publicado: ${postContent}`);
      setPostContent('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="Comparte tus ideas con la comunidad"
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={handlePublish}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Publicar
      </button>
    </div>
  );
};

export default CreatePost;