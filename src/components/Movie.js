import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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

// rating: 별로 환산
function starRating(rating) {
  if (rating <= 7) {
    return "★★";
  } else if (rating <= 8) {
    return "★★★";
  } else if (rating <= 9) {
    return "★★★★";
  } else if (rating <= 10) {
    return "★★★★★";
  }
}

function Movie({ year, title, rating, genres, summary, poster }) {
  return (
    <div className="movie" style={{ backgroundImage: `url(${poster})` }}>
      <Link
        to={{
          pathname: "/detail",
          state: { year, title, rating, genres, summary, poster },
        }}
      >
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__rating">{starRating(rating)}</h5>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">{genres.map((genre) => genre + " ")}</ul>
        <p className="movie__summary">{checkLength(summary)}</p>
      </Link>
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
