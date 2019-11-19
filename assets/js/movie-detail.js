import {movieApi} from './movie-api.js';
import {movieCard} from './movie-card.js';
import {movieDetailLayout} from './movie-detail-layout.js';
import {utility} from './utility.js';

let allMovie = [];
const movieId = utility.getIdToURL('id');

allMovie.push(
    movieApi.generes(),
    movieApi.movieDetail(movieId),
    movieApi.similarMovie(movieId),
        );

Promise.all(allMovie).then(data => {
    let generesData = data.shift();
    let movieDetailData = data.shift();
    let similarMovies = data.shift();

//    console.log(movieDetailData);
// movidetail data 
    movieDetailLayout(
        `${utility.posterPath()}${movieDetailData.backdrop_path}`,
            movieDetailData.title,
            movieDetailData.original_title,
            movieDetailData.overview,
            utility.dataMap(movieDetailData.genres),
            movieDetailData.credits.cast,
            utility.directorName(movieDetailData),
            utility.starReview(utility.rating(movieDetailData.vote_average)),
            'movidetailsapp'
        );
        
    // similar Movies list
    similarMovies.results.slice(0,4).forEach((similarMovie)=>{
         movieCard(
            `${utility.posterPath()}${similarMovie.backdrop_path}`,
            similarMovie.original_title,
            similarMovie.title,
            utility.createGenres(similarMovie.genre_ids,generesData),
            utility.starReview(utility.rating(similarMovie.vote_average)),
            similarMovie.id,
            'similarMovies' 
        )
    })
    // modal popup/quick view 
    utility.modalPopupShow();
}).catch(err => document.querySelector('body').innerHTML=err);