import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/">
          <About />
        </Route>

        <Route exact path="/discover">
          <Discover />
        </Route>

        <Route exact path="/search">
          <Search />
        </Route>
      </div>
    </Router>
  );
}

export default App;
