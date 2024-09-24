import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

function Movie() {
  const { id } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchInformation = async () => {
      const url = `https://advanced-movie-search.p.rapidapi.com/movies/getdetails?movie_id=${id}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '500a7c3fe7msh9f108725ac69226p18aba3jsn692b854b3288',
          'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details from RapidAPI');
        }
        const data = await response.json();
        console.log(data);
        
        const response1 = await fetch(
          `http://www.omdbapi.com/?i=${data.imdb_id}&apikey=c1d4088f`
        );
        if (!response1.ok) {
          throw new Error('Failed to fetch movie details from OMDb API');
        }
        const result = await response1.json();
        setContent(result);
        console.log(result);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchInformation();
  }, [id]);

  if (!content) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <MovieDetails content={content} />
    </div>
  );
}

export default Movie;
