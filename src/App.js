import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/films/premiers"
          render={() => <Main link="movie/now_playing" />} />
        <Route path="/films/onscreens"
          render={() => <Main link="movie/upcoming" />} />
        <Route path="/films/top"
          render={() => <Main link="movie/top_rated" />} />
        <Route path="/serials/popular"
          render={() => <Main link="tv/popular" />} />
        <Route path="/serials/onair"
          render={() => <Main link="tv/on_the_air" />} />
        <Route path="/serials/bestrating"
          render={() => <Main link="tv/top_rated" />} />
        <Redirect to="/films/premiers" />
      </Switch>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
