import React from 'react'

function Card({image , title , releaseDate}) {
  return (
    <div>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">Release Date: {releaseDate}</p>
        </div>
    </div>
  )
}

export default Card;
