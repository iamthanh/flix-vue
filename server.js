const express = require('express');
const axios = require('axios')
const cors = require('cors')

// Using express as the app
const app = express();
const port = process.env.PORT || 5000;

// Public api key for themoviedb
const apiKey = '146847dbeaa67f4b1e28159ee410ec30';

app.use(cors({
  origin: 'http://localhost:3000'
}));

const getTopMovies = async (page=1)  => {
  try {
    return await axios.get('http://api.themoviedb.org/3/movie/popular?api_key='+apiKey+'&page=' + page);
  } catch {
    console.log('Failed to getTopMovies');
    return false;
  }
}

const searchMoviesByQuery = async (query='')  => {
  try {
    return await axios.get('http://api.themoviedb.org/3/search/movie/?api_key='+apiKey + (query ? '&query=' + query : ''));
  } catch {
    console.log('Failed to searchMoviesByQuery');
    return false;
  }
}

const getMovieById = async (id) => {
  try {
    return await axios.get('http://api.themoviedb.org/3/movie/' + id + '?api_key='+apiKey);
  } catch {
    console.log('Failed to getMovieById');
    return false;
  }
}

// Setting up the api routes
app.get('/api/movies/top/:page', (req, res) => {
  let page = req.params.page ? req.params.page : 1;
  getTopMovies(page).then(r => {
    res.status(r.status);
    res.send(r.data)
  });
});

// Setting up the api routes
app.get('/api/movies/search/:query', (req, res) => {
  let query = req.params.query ? req.params.query : null;

  if (!query) {
    res.status(400);
    res.send({
      status: false,
      message: 'Failed to complete api request: query string is missing'
    })
  }

  searchMoviesByQuery(query).then(r => {
    res.status(r.status);
    res.send(r.data)
  });
});

// Setting up the api routes
app.get('/api/movie/:movieId', (req, res) => {
  let movieId = req.params.movieId ? req.params.movieId : null;

  if (!movieId) {
    res.status(400);
    res.send({
      status: false,
      message: 'Failed to complete api request: movieId is missing'
    })
  }

  getMovieById(movieId).then(r => {
    res.status(r.status);
    res.send(r.data)
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));