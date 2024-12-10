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
    <div className="fixed inset-0 mx-auto my-auto w-[1000px] h-[550px] bg-[#ADD8E6] shadow-lg rounded-lg flex flex-col p-6">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="ml-auto text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-700"
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
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl font-bold mb-4">{movieDetails.original_title}</h1>
          <p className="text-sm black mb-2">
            <strong>Release Date:</strong> {movieDetails.release_date}
          </p>
          <p className="text-sm text-black mb-2">
            <strong>Rating:</strong> {movieDetails.vote_average} / 10
          </p>
          <p className="text-black mb-4">{movieDetails.overview}</p>
          <div>
            <a
              href={`https://www.themoviedb.org/movie/${movieDetails.id}`}
              target="_blank"
              className="text-blue-500 underline hover:text-blue-700"
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