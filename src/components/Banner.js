import { FaTv } from "react-icons/fa";
import "./Banner.css";
import Rating from "./Rating";

const getIndex = (data) => {
  return Math.floor(Math.random() * data.length);
};

const Banner = ({ data }) => {
  const index = getIndex(data);
  const path = data[index]?.backdrop_path;

  const backgroundImageStyle = {
    backgroundImage: `url("http://image.tmdb.org/t/p/w500${path}")`, // Replace with your image path or URL
    backgroundColor: "rgba(0,0,0,0.5)",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    <div style={backgroundImageStyle} className="banner-container">
      <div className="wrapper">
        <div className="banner-title">
          <h1>
            {/* John Wick 3 : <span>Parabellum</span> */}
            {data[index]?.title}
          </h1>
        </div>

        <div className="rating-box">
          <Rating
            popularity={data[index]?.popularity}
            vote={data[index]?.vote_average}
          />
        </div>

        <div className="banner-description">
          {/* John Wick is on the run after killing a member of the assasins
            guild, and with a $14 million price tag on his head, he is the
            target of hit men and women everywhere. */}
          {data[index]?.overview}
        </div>

        <button className="btn-trailer">
          <FaTv /> <p>WATCH TRAILER</p>
        </button>
      </div>
    </div>
  );
};

export default Banner;
