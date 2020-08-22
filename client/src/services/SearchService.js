import Apis from './Apis';

export default {

  // This searches based on filtering, requests are not made
  async quickSearch(searchTerm, movies) {

    if (!movies) return await [];
    if (!searchTerm) return await movies;

    let results = [];
    if (movies.length) {
      for (let i = 0; i < movies.length; i++) {
        if ((movies[i].title + ' ' + movies[i].overview).toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
          results.push(movies[i]);
        }
      }
    }
    return await results;
  },

  // This performs a search via api
  async search(searchTerm) {
    return Apis.searchMovies(searchTerm);
  }
}