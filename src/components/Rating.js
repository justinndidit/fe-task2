import tomato from "../assets/tomato.png";
import "./Rating.css";
import imdbLogo from "../assets/imdb-small.png";

const Rating = ({ popularity, vote }) => {
  return (
    <div className="flex">
      <div className="rating imdb-rating">
        <img src={imdbLogo} alt="" />
        <p>{vote * 10}/100</p>
      </div>
      <div className="rating rrotten-tomato-rating">
        <img src={tomato} alt="tomato logo" />
        <div>
          <p>{Math.trunc(popularity)}%</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
