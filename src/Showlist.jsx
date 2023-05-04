import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => setShows(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Show List</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <Link to={`/shows/${show.show.id}`}>{show.show.name}</Link>
            <p>Language: {show.show.language}</p>
            <p>Genre: {show.show.genres.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ShowSummary = ({ match }) => {
  const [summary, setSummary] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${match.params.id}`)
      .then((response) => setSummary(response.data.summary))
      .catch((error) => console.log(error));
  }, [match.params.id]);

  return (
    <div>
      <h1>Show Summary</h1>
      <p>{summary}</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ShowList} />
          <Route path="/shows/:id" component={ShowSummary} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
