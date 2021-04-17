import React from "react";
import requests from "../api/requsets";
import BannerContainer from "../containers/BannerContainer";
import SwiperRowContainer from "../containers/SwiperRowContainer";
import "./HomeScreen.css";
import Nav from "../components/Nav";

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <Nav />
      <BannerContainer />
      <SwiperRowContainer
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />{" "}
      <SwiperRowContainer
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <SwiperRowContainer title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <SwiperRowContainer
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <SwiperRowContainer
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <SwiperRowContainer
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <SwiperRowContainer
        title="Romance Movies"
        fetchUrl={requests.fetchRomandMovies}
      />
      <SwiperRowContainer
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};

export default HomeScreen;
