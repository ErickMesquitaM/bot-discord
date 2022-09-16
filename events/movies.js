const MovieDB = require('moviedb')(process.env.KEY_TMDB);

async function movies(){

  MovieDB.searchMovie({ query: 'The Hobbit' }, (err, res) => {
    console.log(res.results[0])
  });
}

// img = https://www.themoviedb.org/t/p/w600_and_h900_bestv2

module.exports = movies
