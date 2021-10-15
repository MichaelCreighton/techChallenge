import axios from "axios";
import "./App.css";
// import InputForm from "./InputForm";
import { useState } from "react";

//API key: 1644278f
//http://www.omdbapi.com/?apikey=1644278f&

function App() {
  const [movie, setMovie] = useState([]);
  const [titleInput, setTitleInput] = useState("star wars");
  const [yearInput, setYearInput] = useState("");

  const handleChange = (event) => {
    setTitleInput(event.target.value);
  };

  const handleTitleClick = (event) => {
    event.preventDefault();
    getMovie(titleInput);
  };
  const handleYearClick = (event) => {
    event.preventDefault();
    getMovie(yearInput);
  };

  const getMovie = (titleInput) => {
    
    axios({
      url: "http://www.omdbapi.com/?apikey=1644278f&",
      method: "GET",
      dataResponse: "json",
      params: {
        t: titleInput,
        // y: titleInput,
        type: "movie",
        plot: "full",
      },
    }).then((res) => {
      setMovie(res.data);
      console.log(res.data);
    })
  };

  // getMovies();

  return (
    <div className="App">
      <div className="formContainer">
        {/* <inputForm handleChange handleClick />
        <inputForm handleChange handleClick />
        <inputForm handleChange handleClick /> */}

        <form action="">
          <label htmlFor="">Enter a Movie Title:</label>
          <input type="text" onChange={handleChange} />
          <button onClick={handleTitleClick}>Search!</button>
        </form>

      </div>

      {/* <div className="formInputs">
        <form action="">
          <label htmlFor="">Enter a Movie Title:</label>
          <input type="text" onChange={handleChange} />
          <button onClick={handleTitleClick}>Search!</button>
        </form>
        <form action="">
          <label htmlFor="">Enter a Year:</label>
          <input type="number" onChange={handleChange} />
          <button onClick={handleYearClick}>Search!</button>
        </form>
        <form action="">
          <label htmlFor="">Enter a Movie Title:</label>
          <input type="text" onChange={handleChange} />
          <button onClick={handleTitleClick}>Search!</button>
        </form>
      </div> */}

      <div className="info">
        <h2>Title: {movie.Title}</h2>
        <h2>Year: {movie.Year}</h2>
        <img src={movie.Poster} alt="" />
        <h2>Genre: {movie.Genre}</h2>
        <h2>Rated: {movie.Rated}</h2>
        <p>Plot: {movie.Plot}</p>
      </div>
    </div>
  );
}

export default App;
