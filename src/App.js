import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/article/nyt://article/:articleId"
            component={ArticleDetails}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
