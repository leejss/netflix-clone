import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import SwiperRow from "../components/SwiperRow";

const SwiperRowContainer = ({ fetchUrl, title, isLarge }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchMovie();
  }, [fetchUrl]);

  if (movies.length < 20) return null;
  if (isLarge) {
    return <SwiperRow movies={movies} title={title} isLarge />;
  }
  return <SwiperRow movies={movies} title={title} />;
};

export default SwiperRowContainer;
