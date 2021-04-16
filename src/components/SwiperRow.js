import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SwiperRow.css";
import "swiper/swiper.scss";

const SwiperRow = ({ movies, title }) => {
  const img_base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="row">
      <h2>{title}</h2>
      <Swiper spaceBetween={5} loop slidesPerView={5}>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`${img_base_url}${movie.backdrop_path}`}
              alt={movie.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperRow;
