import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShowDetails() {
  const [shows, setShows] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        setShows(res.data);
      })
      .catch((error) => console.log(error));
    // setSrc(shows);
  }, []);
  // console.log(shows[0].show.image.medium);
  return (
    <>
      <h1 className="show-list">Show List</h1>
      <ul>
        <div className="show-list-main">
          {shows ? (
            shows.map((item, index) => (
              <div className="show-list-card">
                <h6 style={{ display: "inline" }}>
                  <i>Show Name:</i>
                  <b> {item.show.name}</b>
                  <br />
                  <i>
                    Score: <b>{item.score}</b>
                  </i>
                </h6>
                <p>Language: {item.show.language}</p>
                <p>Genre: {item.show.genres.join(", ")}</p>
                <button onClick={() => {}}>
                  <Link to={`/shows/${item.show.id}`}>View Summary</Link>
                </button>
              </div>
            ))
          ) : (
            <>Loading</>
          )}
        </div>
      </ul>
    </>
  );
}

export default ShowDetails;
