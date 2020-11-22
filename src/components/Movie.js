import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

// summary: summary.length < maxLength && cut by word
function checkLength(summary) {
  const maxLength = 80;
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

// rating: rating -> mango
function starRating(rating) {
  if (rating <= 7) {
    return "●●";
  } else if (rating <= 8) {
    return "●●●";
  } else if (rating <= 9) {
    return "●●●●";
  } else if (rating <= 10) {
    return "●●●●●";
  }
}

function Movie({ id, year, title, rating, genres, summary, poster }) {
  return (
    <Link
      className="movies"
      to={{
        pathname: `/movie/${id}`,
        state: { year, title, rating, genres, summary, poster },
      }}
    >
      <div className="movie" style={{ backgroundImage: `url(${poster})` }}>
        <h3 className="movie__title highlighter">{title}</h3>
        <h5 className="movie__year highlighter">{year}</h5>
        <h5 className="movie__rating">{starRating(rating)}</h5>
        <h5 className="movie__genres highlighter">
          {genres
            .filter((genre, index) => index < 2)
            .map((genre) => genre + " ")}
        </h5>
        <p className="movie__summary highlighter">{checkLength(summary)}</p>
      </div>
    </Link>
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
