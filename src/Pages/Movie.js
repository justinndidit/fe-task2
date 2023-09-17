import NavigationMovie from "../components/NavigationMovie";
import Main from "../components/MainMovie";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

const Movie = () => {
  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=8b7719074beeb5d61a85b3b583e4a864`;
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
      return setMovie(data);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
  };
  return (
    <div style={containerStyle}>
      <NavigationMovie />
      <Main data={movie} genreData={genre} />
    </div>
  );
};

export default Movie;
