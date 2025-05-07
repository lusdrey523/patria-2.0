import React, { useState } from 'react';

const SocialPost = ({ user, content, media, location,tsz tags }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleComment = () => {
    if (commentText.trim()) {
      setComments([...comments, { user: 'Usuario Actual', text: commentText }]);
      setCommentText('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <img src="https://via.placeholder.com/40" alt="User" className="rounded-full mr-2" />
        <div>
          <p className="font-semibold">{user}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <p>{content}</p>
      {media && <img src={media} alt="Post" className="w-full h-40 object-cover rounded mt-2" />}
      <div className="flex space-x-2 mt-2">
        {tags.map((tag) => (
          <span key={tag} className="text-sm px-2 py-1 bg-gray-100 text-gray-800 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4 mt-2">
        <button onClick={() => setLikes(likes + 1)} className="text-blue-600">👍 {likes}</button>
        <button className="text-gray-600">Comentar</button>
        <button className="text-red-600">Reportar</button>
      </div>
      <div className="mt-2">
        {comments.map((comment, index) => (
          <p key={index} className="text-sm text-gray-600">
            <strong>{comment.user}:</strong> {comment.text}
          </p>
        ))}
        <div className="flex mt-2">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Escribe un comentario..."
            className="flex-1 p-2 border rounded"
          />
          <button onClick={handleComment} className="ml-2 bg-blue-600 text-white p-2 rounded">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialPost;