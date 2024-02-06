import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MovieInput.module.css";
import { useState } from "react";

const MovieInput = () => {
  const [movies, setMovies] = useState([]);
  const [newMovies, setNewMovies] = useState("");

  const addMovies = () => {
    setMovies([...movies, newMovies]);
    setNewMovies("");
  };

  return (
    <>
      <h3>My Favourite Movie</h3>
      <div>
        <input
          type="text"
          id="movieInput"
          className={styles.movieInput}
          placeholder="Enter Movie"
          onChange={(e) => setNewMovies(e.target.value)}
        />
        <button type="button" className="btn btn-warning" onClick={addMovies}>
          Add
        </button>
      </div>
      <div>
        <ul className="list-group">
          {movies.map((movie, index) => (
            <li className="list-group-item" key={index}>
              {movie}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MovieInput;
