import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time} minutes</p>
      <p>
        Genres: {movie.genres.map((genre, index) => (
          <span key={index}>{genre}{index < movie.genres.length - 1 ? ', ' : ''}</span>
        ))}
      </p>
      <Link to={`/movie/${movie.id}`}>View Info</Link>
    </div>
  );
}

export default MovieCard;
