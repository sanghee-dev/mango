import React from "react";
import PropTypes from "prop-types";
function checkLength(summary) {
  const maxLength = 180;
  if (summary.length < maxLength) {
    return summary;
  } else {
    for (let i = maxLength; i > 0; i--) {
      if (summary.slice(i, i + 1) === " ") {
        return summary.slice(0, i) + "...";
      }
    }
  }
}

function Movie({ year, title, genres, summary, poster }) {
  return (
    <div className="movie">
      <img className="movie__image" src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li className="movie__genres__genre" key={index}>
              {genre}
            </li>
          ))}
        </ul>
        <p>{checkLength(summary)}</p>
      </div>
      <h5 className="movie__rating">{rating}</h5>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
