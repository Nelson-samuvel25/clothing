
import React from 'react';
import './App.css';

import { Route } from 'react-router-dom/cjs/react-router-dom.min';
 
import HomePage from './pages/homepage/HomePage';

import Shop from './pages/shoppage/Shop';



function App() {
  return (
    <div>
      <Route exact path = '/' component = {HomePage}/>
      <Route path = "/shop" component = {Shop}/>
    </div>
  );
}

export default App;
