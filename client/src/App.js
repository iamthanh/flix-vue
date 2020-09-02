import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import SearchPage from './components/SearchPage';
import DetailPage from './components/DetailPage';


/**
 * 1) pagination
 *    buttons to move 
 *    <   40   > 
 * 2) Loading message
 * 3) search on change
 * 
 */

function App() {
  return (
    <div className='movie-finder'>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/movie/id/:movieId" component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
