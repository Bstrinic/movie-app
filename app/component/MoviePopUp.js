"use client";

import { useEffect, useState } from "react";

const MovieBox = ({ movie, onClose }) => {
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    // Setting movie details from props
    if (movie) {
      setMovieDetails(movie);
    }
  }, [movie]);

  if (!movieDetails) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black/50">
        <p className="text-white">Loading Movie Details...</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 mx-auto my-auto w-[1000px] h-[550px] bg-black/90 shadow-lg rounded-lg flex flex-col p-6">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="ml-auto text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-blue-600"
      >
        Close
      </button>

      {/* Movie Details */}
      <div className="flex gap-6">
        {/* Poster Image */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.original_title}
          className="w-64 h-auto rounded-lg shadow-md"
        />

        {/* Movie Info */}
        <div className="flex flex-col ">
          <h1 className="text-4xl justify-center items-center text-white font-bold mb-4">{movieDetails.original_title}</h1>
          <p className="text-sm text-white mb-2">
            <strong>Release Date:</strong> {movieDetails.release_date}
          </p>
          <p className="text-sm text-white mb-2">
            <strong>Rating:</strong> {movieDetails.vote_average} / 10
          </p>
          <p className="text-white mb-4">{movieDetails.overview}</p>
          <div>
            <a
              href={`https://www.themoviedb.org/movie/${movieDetails.id}`}
              target="_blank"
              className="text-white underline hover:text-blue-700"
            >
              View More Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;