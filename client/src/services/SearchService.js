export default {
  async query(searchTerm, movies) {

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
  }
}