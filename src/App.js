import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowDetails from "./components/ShowDetails";
import ShowSummary from "./components/ShowSummary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowDetails />} />
        <Route path="/shows/:id" element={<ShowSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
