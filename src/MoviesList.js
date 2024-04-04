// MoviesList.js
import React from "react";
import "./MoviesList.css";

const MoviesList = ({ data }) => {
  return (
    <>
      <h1>List of movies</h1>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((movie, index) => (
              <tr key={index}>
                <td className="title">{movie.title}</td>
                <td className="genre">{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MoviesList;