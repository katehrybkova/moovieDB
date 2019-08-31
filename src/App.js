import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainContainer from './components/Main/MainContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer/>
      <Footer />
    </div>
  );
}

export default App;
