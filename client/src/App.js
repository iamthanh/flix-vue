import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SearchPage from './components/SearchPage';
import DetailPage from './components/DetailPage';
import PersonPage from './components/PersonPage';

function App() {

  // 1) main app requests to get top movies
  // 2) movies are set into main app
  // 3) movies are filtered/search input using search service
  // 4) searches from filters are passed into searchresultspage
  // 5) filters are passed into filters component 
  // 6) filtering functions are passed into filters component
  
  return (
    <div className='flix-vue'>
      <Router>
        <div>
          <Switch>
            <Route path="/movie/">
              <DetailPage />
            </Route>
            <Route path="/person/">
              <PersonPage />
            </Route>
            <Route path="/">
              <SearchPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
