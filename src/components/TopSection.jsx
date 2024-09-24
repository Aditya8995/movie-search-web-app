import React from 'react';

function MovieDetails({ content }) {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row items-center lg:items-start mb-10">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img 
            src={content.Poster} 
            alt={content.Title} 
            className="w-full h-auto rounded-lg shadow-lg border-2 border-gray-200"
          />
        </div>
        <div className="lg:ml-10 w-full lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            {content.Title}
          </h1>
          <p className="text-gray-600 mt-4 text-xl">
            Release Date: <span className="text-gray-800 font-semibold">{content.Released}</span>
          </p>
          <p className="text-gray-600 mt-2 text-lg">
            Genre: <span className="text-gray-800">{content.Genre}</span>
          </p>
          <p className="text-gray-600 mt-2 text-lg">
            Runtime: <span className="text-gray-800">{content.Runtime}</span>
          </p>
          <p className="text-gray-600 mt-2 text-lg">
            Director: <span className="text-gray-800">{content.Director}</span>
          </p>
          <p className="text-gray-600 mt-2 text-lg">
            Language: <span className="text-gray-800">{content.Language}</span>
          </p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            {content.Plot}
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cast</h2>
          <ul className="text-gray-700 space-y-2">
            {content.Actors.split(',').map((actor, index) => (
              <li key={index} className="text-lg">{actor}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rating</h2>
          <p className="text-lg text-gray-700">IMDb: {content.imdbRating} / 10</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Production Companies</h2>
          <p className="text-lg text-gray-700">{content.Production !== "N/A" ? content.Production : "Information not available"}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Budget & Box Office</h2>
          <p className="text-lg text-gray-700">Budget: {content.Budget || 'N/A'}</p>
          <p className="text-lg text-gray-700">Box Office: {content.BoxOffice || 'N/A'}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Awards</h2>
        <p className="text-lg text-gray-700">{content.Awards !== "N/A" ? content.Awards : "No awards information available"}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Reviews</h2>
        <p className="text-lg text-gray-700">IMDb Reviews: {content.imdbVotes}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
