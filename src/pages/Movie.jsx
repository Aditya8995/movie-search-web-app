import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetails from '../components/MovieDetails';

function Movie() {
  const {id} = useParams()
  const [content,setContent] = useState(null)
  

  useEffect (() =>{
    const fetchInformation = async() =>{
      const url = `https://advanced-movie-search.p.rapidapi.com/movies/getdetails?movie_id=${id}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '500a7c3fe7msh9f108725ac69226p18aba3jsn692b854b3288',
          'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com'
        }
      };
  
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setContent(data)
        console.log(data);
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchInformation()
  } ,[id])
  return (
    <div>
      {content && <MovieDetails content={content} />}
    </div>
  )
}

export default Movie

