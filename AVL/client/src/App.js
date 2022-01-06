import React from "react";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Results from "./routes/Results";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-lg navbar1">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:id/Search" exact element={<Search />} />
          <Route path="/:id/Results" exact element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
