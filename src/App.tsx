import React from 'react'

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import './App.css';

import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import HousingList from './components/Housing/HousingList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Filter></Filter>
      <HousingList></HousingList>
    </div>
  );
}

export default App;
