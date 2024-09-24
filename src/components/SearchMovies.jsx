import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";

function SearchMovies({setMovies}) {
  const [input,setInput] = useState("") 
  
  const fetchMovies = async() =>{
   
    const url = `https://advanced-movie-search.p.rapidapi.com/search/movie?query=${input}&page=1`;
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
    
  }
        

  const handleSubmit = (e) =>{
    e.preventDefault();
    fetchMovies()
  }

  return (
    <div>
      <form action="" className="mt-8 mb-8 mx-auto flex items-center space-x-4 w-1/3" onSubmit={handleSubmit}>
        <input
        onChange={(e) => {setInput(e.target.value)}}
        value={input}
        type='text'
        placeholder='Search Movies'
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <IoMdSearch/>
        </button>
      </form>
    </div>
  )
}

export default SearchMovies
