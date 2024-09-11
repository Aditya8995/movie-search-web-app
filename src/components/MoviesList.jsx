import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function MoviesList({movies}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link to={`/Movie/${movie.id}`}>
            <Card image = {movie.backdrop_path} title = {movie.title} releaseDate = {movie.release_date}/>
          </Link>  
        </div>
      ))}
    </div>
  )
}

export default MoviesList
