import { useEffect, useState } from "react";
import Header from "../components/Header";
import Flier from "../components/Flier";
import Footer from "../components/Footer";

const Home = () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=8b7719074beeb5d61a85b3b583e4a864";
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    fetchData();
  }, [url]);
  async function fetchData() {
    try {
      const res = await fetch(url);
      const resGenre = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=8b7719074beeb5d61a85b3b583e4a864"
      );
      const data = await res.json();
      const dataGenre = await resGenre.json();
      setGenre(dataGenre);
      return setMovie(data.results);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
  return (
    <>
      <Header movie={movie} />
      <Flier movie={movie} genre={genre} />
      <Footer />
    </>
  );
};

export default Home;
