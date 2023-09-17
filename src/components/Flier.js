import favorite from "../assets/Icon.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Flier.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Flier = ({ movie, genre }) => {
  console.log(movie);

  return (
    <div className="movie-catalogue">
      <div className="heading">
        <h1>Featured Movie</h1>
        <p>
          See More <FaLongArrowAltRight />
        </p>
      </div>
      <div className="flier-container">
        {movie?.map(function (mov, index) {
          try {
            if (index >= 10) return null;

            // Check if 'mov' and 'mov.genre_ids' exist before accessing properties
            const posterPath = mov?.poster_path || "";
            const name = mov?.title || "";
            const originCountry =
              mov?.original_language +
              ", " +
              (mov?.release_date
                ? new Date(mov?.release_date).getFullYear()
                : "");

            return (
              <Link
                to={`/movies/${mov.id}`}
                className="flier"
                data-testid="movie-card"
                key={index}
              >
                <div className="poster">
                  <div className="fav-container">
                    <img
                      data-testid="movie-poster"
                      src={`http://image.tmdb.org/t/p/w500${posterPath}`}
                      className="poster-img"
                      alt={name}
                    />
                    <div className="fav-wrapper">
                      <img
                        src={favorite}
                        className="favorite"
                        alt="Add to favourite button"
                      />
                    </div>
                  </div>

                  <div className="poster-details">
                    <div className="details">
                      <p data-testid="movie-release-data">{originCountry}</p>
                      <h2 data-testid="movie-title">{name}</h2>
                      <Rating
                        popularity={mov?.popularity}
                        vote={mov?.vote_average}
                      />
                      <p className="genre">
                        {mov.genre_ids.map((gen, index) =>
                          genre.genres
                            .filter((el, index) => gen === el.id)
                            .map((el, index) => {
                              if (index >= genre.genres.length) {
                                return el.name;
                              }
                              return (
                                el.name +
                                ", ".substring(0, (el.name + ", ").length - 1)
                              );
                            })
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          } catch (err) {
            console.log(err);
            return null; // Return null for this element if an error occurs
          }
        })}
      </div>
    </div>
  );
};

export default Flier;
