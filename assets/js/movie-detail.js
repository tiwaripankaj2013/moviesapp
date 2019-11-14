
import {movieApi} from './movie-api.js';
import {movieCard} from './movie-card.js';
import {movieDetailLayout} from './movie-detail-layout.js';
import {utility} from './utility.js';


const POSTER_PATH = `https://image.tmdb.org/t/p/w500/`;

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

   function createGenres(genresid){
    const currentGenres = generesData.genres.filter(genre => genresid.includes(genre.id) )
    let genereName = '';
    currentGenres.map(item => genereName += item.name + ', ');
    genereName = genereName.slice(0, -2); 
    return genereName;
   }
   console.log(movieDetailData);
// movidetail data 
    movieDetailLayout(
        `${POSTER_PATH}${movieDetailData.backdrop_path}`,
            movieDetailData.title,
            movieDetailData.original_title,
            movieDetailData.overview,
            utility.dataMap(movieDetailData.genres),
            movieDetailData.credits.cast,
            utility.directorName(movieDetailData),
            utility.starReview(Math.round(movieDetailData.vote_average/2)),
            'movidetailsapp'
        );
        
    // similar Movies list
    similarMovies.results.slice(0,4).forEach((similarMovie)=>{
         movieCard(
            `${POSTER_PATH}${similarMovie.backdrop_path}`,
            similarMovie.original_title,
            similarMovie.title,
            createGenres(similarMovie.genre_ids),
            utility.starReview(Math.round(similarMovie.vote_average/2)),
            similarMovie.id,
            'similarMovies' 
        )
    })
}).catch(err => document.querySelector('body').innerHTML=err);