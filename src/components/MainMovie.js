import play from "../assets/Play btn.png";
import star from "../assets/Star.png";
import ticket from "../assets/Two Tickets.png";
import list from "../assets/List.png";
import others from "../assets/trendy.png";
import downKey from "../assets/arrowdown.png";
import "./MainMovie.css";

const Main = ({ data }) => {
  console.log(data);

  return (
    <section className="main-container">
      <div className="wrapper-movie">
        <div className="show-trailer">
          <img
            src={`http://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt={data.title}
            className="poster"
          />
          <div className="play-btn">
            <img src={play} alt="play trailer btn" />
          </div>
        </div>

        <div className="show-movie-details">
          <div className="movie-summary">
            <div className="movie-info">
              <p data-testid="movie-title">{data.title}</p>
              <div className="dot"></div>
              <p data-testid="movie-release-date">
                {Date.UTC(
                  new Date(data.release_date).getFullYear(),
                  new Date(data.release_date).getMonth(),
                  new Date(data.release_date).getDay()
                )}
              </p>
              <div className="dot"></div>
              <p>{data.adult ? "PG-18" : "PG-13"} </p>
              <div className="dot"></div>
              <p data-testid="movie-runtime">{`${data.runtime} mins`}</p>
              <div className="genre">
                {/* <div className="small-card">Action</div>
                <div className="small-card">Drama</div> */}
                {data?.genres?.map((gen, index) => (
                  <div key={index} className="small-card">
                    {gen.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="movie-rating">
              <img src={star} alt="" />
              <p>
                {Math.round(data.vote_average)} |{" "}
                {`${Math.round(data.vote_count / 1000)}k`}
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="about-movie">
            <p className="about-para" data-testid="movie-overview">
              {/* After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUN's elite graduates on a mission that demands th
              ultimate sacrifice from those chosen to fly it. */}
              {data.overview}
            </p>

            <p className="crew_cast">Directors: Joseph Kosinski</p>
            <p className="crew_cast">
              Writers: Jim Cash, Jack Epps Jr, Peter Craig
            </p>
            <p className="crew_cast">
              Stars: Tom Cruise, Jennifer Connelly, Miles Teller
            </p>
            <div className="accomplishment">
              <div className="top-rated">
                <p>Top rated movie #65</p>
              </div>
              <div className="award">
                <p>Awards 9 nomination</p>
                <img src={downKey} alt="" />{" "}
              </div>
            </div>
          </div>
          <div className="other-movies">
            <button className="btn-other-movies red">
              <img src={ticket} alt="" />
              <p>See Showtimes</p>
            </button>
            <button className="btn-other-movies">
              <img src={list} alt="" />
              <p>More Watch Options</p>
            </button>
            <img src={others} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
