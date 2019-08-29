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
          render={() => <Main link="https://api.themoviedb.org/3/movie/now_playing?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1" />} />
        <Route path="/films/onscreens"
          render={() => <Main link="https://api.themoviedb.org/3/movie/upcoming?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&page=1" />} />
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
