const axios = require('axios')

export default {
  async fetchTopMovies(page=1) {
    try {
      return await axios.get('http://api.themoviedb.org/3/movie/popular?api_key=146847dbeaa67f4b1e28159ee410ec30&page='+page)
    } catch (error) {
      console.error(error)
    } 
  }  
}