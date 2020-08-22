const axios = require('axios')

export default {

  // Used for caching, fetches data based on key from window.localStorage
  async fetchFromCache(key) {
    if (window.localStorage) {
      if (key in window.localStorage) return JSON.parse(window.localStorage[key])
    }
    return null;
  },

  // This requests the top movies from themoviedb, using page number
  async fetchTopMovies(page = 1, useCache = true) {
    try {
      let cacheKey = ('fetchTopMovies-page' + page);
      if (useCache && cacheKey in window.localStorage) {
        let cacheData = this.fetchFromCache(cacheKey);
        if (cacheKey) return await cacheData;
      }

      let dataPromise = axios.get('http://api.themoviedb.org/3/movie/popular?api_key=146847dbeaa67f4b1e28159ee410ec30&page=' + page);
      dataPromise.then((r) =>
        window.localStorage.setItem(cacheKey, JSON.stringify(r))
      );
      return await dataPromise;
    } catch (error) {
      console.error(error)
    }
  },

  // This fetches the details for a specific movie from themoviedb based on movie id
  async fetchMovieById(id, useCache = true) {
    try {
      let cacheKey = ('movie-detail' + id);
      if (useCache && cacheKey in window.localStorage) {
        let cacheData = this.fetchFromCache(cacheKey);
        if (cacheKey) return await cacheData;
      }

      let dataPromise = axios.get('http://api.themoviedb.org/3/movie/' + id + '?api_key=146847dbeaa67f4b1e28159ee410ec30');
      dataPromise.then((r) =>
        window.localStorage.setItem(cacheKey, JSON.stringify(r))
      );
      return await dataPromise;
    } catch (error) {
      console.error(error)
    }
  },

  // This calls for a request to search themoviedb based on a query string
  async searchMovies(searchTerm, useCache = true) {
    if (!searchTerm.length) {
      return await this.fetchTopMovies();
    }

    try {
      let cacheKey = ('movie-search-' + searchTerm);
      if (useCache && cacheKey in window.localStorage) {
        let cacheData = this.fetchFromCache(cacheKey);
        if (cacheKey) return await cacheData;
      }

      let dataPromise = axios.get('http://api.themoviedb.org/3/search/movie/?api_key=146847dbeaa67f4b1e28159ee410ec30' + (searchTerm ? '&query=' + searchTerm : ''));
      dataPromise.then((r) =>
        window.localStorage.setItem(cacheKey, JSON.stringify(r))
      );
      return await dataPromise;
    } catch (error) {
      console.error(error)
    }
  }
}