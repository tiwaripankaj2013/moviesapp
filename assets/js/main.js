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
    let latestMovieData = data.shift();
    let trendingMovieData = data.shift();
    let popularMovieData = data.shift();

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
    latestMovieData.results.slice(0, 4).forEach((latestMovie) => {
        movieData(latestMovie, latestMovie.id, 'latestMovies');
    });

    /* trending  movies data create card layouts */
    trendingMovieData.results.slice(0, 4).forEach((trendingMovie) => {
        
        movieData(trendingMovie, trendingMovie.id, 'trendingMovies');
    });
    /* popular  movies data create card layouts */
    popularMovieData.results.slice(0, 4).forEach((popularMovie) => {
        
        movieData(popularMovie, popularMovie.id, 'mostWatchedMovies');
    });
    // modalpopup Data  

//    show modal popup
    utility.modalPopupShow();

   
})
.catch(error => document.querySelector('body').innerHTML = error);
