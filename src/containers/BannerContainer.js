import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import axios from "../api/axios";
import requests from "../api/requsets";

const BannerContainer = () => {
  const [movie, setMoive] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMoive(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    fetchData();
  }, []);

  if (!movie) return null;

  return <Banner movie={movie} />;
};

export default BannerContainer;
