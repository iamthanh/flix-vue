const axios = require('axios')

export default {
  async fetchTopMovies(page=1) {
    try {
      return await axios.get('http://api.themoviedb.org/3/movie/popular?api_key=146847dbeaa67f4b1e28159ee410ec30&page='+page);
    } catch (error) {
      console.error(error)
    } 
  },
  async fetchMovieById(id) {
    try {
      return await axios.get('http://api.themoviedb.org/3/movie/'+id+'?api_key=146847dbeaa67f4b1e28159ee410ec30');
    } catch (error) {
      console.error(error)
    } 
  },
  async searchMovies(searchTerm) {
    if (!searchTerm.length) {
      return await this.fetchTopMovies();
    }
    
    try {
      return await axios.get('http://api.themoviedb.org/3/search/movie/?api_key=146847dbeaa67f4b1e28159ee410ec30'+ (searchTerm? '&query='+searchTerm:''));
    } catch (error) {
      console.error(error)
    } 
  }  
}