import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SwiperRow.css";
import "swiper/swiper.scss";

const SwiperRow = ({ movies, title, isLarge }) => {
  const img_base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="row">
      <h2>{title}</h2>
      <Swiper spaceBetween={5} loop slidesPerView={isLarge ? 8 : 5}>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              className={`${isLarge ? "isLarge" : ""}`}
              src={`${img_base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperRow;
