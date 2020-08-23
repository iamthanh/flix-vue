import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import SearchPage from './components/SearchPage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <div className='flix-vue'>
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
