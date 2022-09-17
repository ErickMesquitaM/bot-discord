const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb(process.env.KEY_TMDB)

async function movies(name){

  if(!name){
    name = 'The lord of the rings'
  } 

  let movies = await moviedb.searchMovie({ query: name })
  let movie = movies.results[0]

  return movie
}

module.exports = movies