import React from "react";
import "./Banner.css";

const Banner = ({ movie }) => {
  if (!movie) return null;
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const { backdrop_path, name, original_name, overview } = movie;

  const backgroundUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{name || original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">{truncate(overview, 150)}</p>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
