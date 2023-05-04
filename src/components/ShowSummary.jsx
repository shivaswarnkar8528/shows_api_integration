import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function ShowSummary() {
  const [summary, setSummary] = useState("");
  const params = useParams();
  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${params.id}`)
      .then((result) => {
        setSummary(result.data.summary);
      })
      .catch((error) => console.log(error));
  }, [params.id]);
  const clickHandler = () => {
    // navigate("/");
    window.history.back();
  };

  return (
    <div>
      <h1 className="show-summary">Show Summary</h1>
      <div
        className="show-summary-details"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></div>
      <hr />
      <br />
      <button style={{ marginLeft: "20px" }} onClick={clickHandler}>
        Go back
      </button>
    </div>
  );
}

export default ShowSummary;
