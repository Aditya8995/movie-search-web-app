import React, { useEffect, useState } from 'react'
import SearchMovies from '../components/SearchMovies'
import MoviesList from '../components/MoviesList';

function Home() {
  const [movies,setMovies] = useState([])
  useEffect(() =>{
    const fetchMovieDetails = async () => {
        const url = 'https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=80&page=1';
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
            setMovies(data.results);
            
        } catch (error) {
            console.error(error);
        }
    };
    fetchMovieDetails(); 
  }, []);
  return (
    <div>
      <SearchMovies setMovies = {setMovies}/>
      <MoviesList movies = {movies}/>
    </div>
  )
}

export default Home
