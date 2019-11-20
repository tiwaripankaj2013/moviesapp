import { movieApi } from './movie-api.js';
import { movieCard } from './movie-card.js';
import { utility } from './utility.js';

let allMovie = [];
allMovie.push(
    movieApi.generes(),
    movieApi.latestMovie(),
    movieApi.trandingMovie(),
    movieApi.popularMovie(),

);

Promise.all(allMovie).then(data => {
    let generesData = data.shift();
    let latestMovieData = data.shift().results;
    let trendingMovieData = data.shift().results;
    let popularMovieData = data.shift().results;

    // merege all movies data in single array
    var allMovies = [...latestMovieData, ...trendingMovieData, ...popularMovieData];
    
    var localUniqueMovies = utility.uniqueMovies(allMovies)
  
    // store movies in local storage
    localStorage.setItem('localUniqueMovies', JSON.stringify(localUniqueMovies));
     // store genres name in local storage 
     localStorage.setItem('localGenres', JSON.stringify(generesData));
      
 
     /* utility.uniqueMovies method to find unique movies list  */
    let movieData = (movie, id, idName) => {
        movieCard(
            `${utility.posterPath()}${movie.backdrop_path}`,
            movie.original_title,
            movie.title,
            utility.createGenres(movie.genre_ids, generesData),
            utility.starReview(utility.rating(movie.vote_average )),
            id,
            idName
        )
    }



    /* latest movies data create card layouts */
    latestMovieData.slice(0, 4).forEach((latestMovie) => {
        movieData(latestMovie, latestMovie.id, 'latestMovies');
    });

    /* trending  movies data create card layouts */
    trendingMovieData.slice(0, 4).forEach((trendingMovie) => {
        
        movieData(trendingMovie, trendingMovie.id, 'trendingMovies');
    });
    /* popular  movies data create card layouts */
    popularMovieData.slice(0, 4).forEach((popularMovie) => {
        
        movieData(popularMovie, popularMovie.id, 'mostWatchedMovies');
    });
    // modalpopup Data  

//    show modal popup
    utility.modalPopupShow();

    utility.favouriteMovies();
})
.catch(error =>console.log(error));
// document.querySelector('body').innerHTML = error