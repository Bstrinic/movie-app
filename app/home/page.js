"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MovieBox from "../movie/page";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openMovie, setOpenMovie] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMoviesData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=3ce378549e922368e5438770574a0cae&page=1`
        );
        const data = await response.json();
        // console.log(data); test
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMoviesData();
  }, []);

  // const handleMovieClick = (movieId) => {
  //   router.push("/movie/${movieId}");
  // };

  const openMovieBlock = (movie) => {
    setOpenMovie(!openMovie);
    setSelectedMovie(movie);
    // console.log("Clicked!");
  };

  const closeMovieBlock = () => {
    setOpenMovie(false);
    setSelectedMovie(null);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-full p-4">
      <h1 className="text-lg font-bold">Popular Movies</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => openMovieBlock(movie)}
            className="w-48 cursor-pointer rounded-lg shadow-lg "
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
      {openMovie && selectedMovie && (
        <MovieBox movie={selectedMovie} onClose={closeMovieBlock} />
      )}
    </div>
  );
};

export default Home;
