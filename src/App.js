import "./App.css";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/:id" element={<Movie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
