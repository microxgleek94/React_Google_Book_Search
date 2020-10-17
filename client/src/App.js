import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import SearchBooksPage from './pages/SearchBooksPage';
import SavedBooksPage from './pages/SavedBooksPage';
// import BooksBannerImg from "./components/NavBar/booksBanner.jpg"
import './App.css';



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={["/", "/search"]} component={SearchBooksPage} />
        <Route exact path={"/saved"} component={SavedBooksPage} />
      </Switch>
    </Router>
  );
}

export default App;


