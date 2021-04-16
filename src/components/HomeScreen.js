import React from "react";
import requests from "../api/requsets";
import SwiperRowContainer from "../containers/SwiperRowContainer";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import Row from "./Row";


const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <Nav />
      <Banner />
      <SwiperRowContainer
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />{" "}
      <SwiperRowContainer title="Trending Now" fetchUrl={requests.fetchTrending} />
      <SwiperRowContainer title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <SwiperRowContainer title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <SwiperRowContainer title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <SwiperRowContainer title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <SwiperRowContainer title="Romance Movies" fetchUrl={requests.fetchRomandMovies} />
      <SwiperRowContainer title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
