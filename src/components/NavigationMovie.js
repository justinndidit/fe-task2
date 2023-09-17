import tvIcon from "../assets/tv.png";
import "./NavigationMovie.css";
import Home from "../assets/Home.png";
import camera from "../assets/Movie Projector.png";
import TV from "../assets/TV Show.png";
import Calendar from "../assets/Calendar.png";
import Logout from "../assets/Logout.png";
const NavigationMovie = () => {
  return (
    <div className="nav-movie-container ">
      <div className="wrapper-movie">
        <div className="flex">
          <div className="box">
            <div className="box-img">
              <img className="icon-tv" src={tvIcon} alt="" />
            </div>
            <div className="box-text">
              <h1>MovieBox</h1>
            </div>
          </div>

          <div className="box">
            <div className="box-img">
              <img className="icon-tv" src={Home} alt="" />
            </div>
            <div className="box-text">
              <h2>Home</h2>
            </div>
          </div>

          <div className="box active">
            <div className="box-img">
              <img className="icon-tv" src={camera} alt="" />
            </div>
            <div className="box-text ">
              <h2>Movies</h2>
            </div>
          </div>

          <div className="box">
            <div className="box-img">
              <img className="icon-tv" src={TV} alt="" />
            </div>
            <div className="box-text">
              <h2>TV Series</h2>
            </div>
          </div>

          <div className="box">
            <div className="box-img">
              <img className="icon-tv" src={Calendar} alt="" />
            </div>
            <div className="box-text">
              <h2>Upcoming</h2>
            </div>
          </div>
        </div>

        <div className="bonanza-container">
          <h3>
            Play movie quizes and earn free tickets
            <span> 50k people are playing now</span>
          </h3>
          <button className="btn">start playing</button>
        </div>

        <div className="logout-container">
          <img src={Logout} alt="" />
          <h3>Logout</h3>
        </div>
      </div>
    </div>
  );
};

export default NavigationMovie;
