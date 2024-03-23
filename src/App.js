
import './App.css';
import React from 'react';
import Header from './components/header';
import HeroList from './components/heroList';
import data from './data/data.json';


function App() {
  return (
    <div className='App'>
      <Header />
      <HeroList heroes={data.heroes} />
    </div>
  )
}

export default App;