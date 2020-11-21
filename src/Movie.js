import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// summary: 글자수 180 이하로 단어단위로 생략
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

function Movie({ year, title, rating, genres, summary, poster }) {
  return (
    <div className="movie" style={{ backgroundImage: `url(${poster})` }}>
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__rating">{rating}</h5>
      <h5 className="movie__year">{year}</h5>
      <ul className="movie__genres">{genres.map((genre) => genre + " ")}</ul>
      <p className="movie__summary">{checkLength(summary)}</p>
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
