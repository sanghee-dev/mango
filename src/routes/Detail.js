import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const {
      year,
      title,
      rating,
      genres,
      summary,
      poster,
    } = this.props.location.state;
    return (
      <div className="detail__container">
        <img className="detail__poster" src={poster} />
        <div className="detail__data">
          <div className="detail__data__main">
            <h5 className="detail__title highlighter">
              {title}, {year}
            </h5>
            <h5 className="detail__genres highlighter">
              {genres
                .filter((genre, index) => index < 2)
                .map((genre) => genre + " ")}
            </h5>
          </div>
          <h5 className="detail__summary highlighter">{summary}</h5>
        </div>
      </div>
    );
  }
}

export default Detail;
