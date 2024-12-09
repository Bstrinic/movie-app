"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=3ce378549e922368e5438770574a0cae&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-full p-4">
      <h1>Popular Movies</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {movies.map((movie) => (
          <div key={movie.id} 
               className="w-48 cursor-pointer rounded-lg shadow-lg ">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto rounded-lg"
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
