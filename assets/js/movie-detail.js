
import {generes,movieDetail,similarMovie} from './movie-api.js';
import {movieCard} from './movie-card.js';
import {movieDetailLayout} from './movie-detail-layout.js';
import {starReview,findGetParameter} from './common.js';


const POSTER_PATH = `https://image.tmdb.org/t/p/w500/`;

let allMovie = [];

const movieId = findGetParameter('id');

allMovie.push(
        generes(),
        movieDetail(movieId),
        similarMovie(movieId),
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

//  get array data name to data map method
   function dataMap(data){
    let datas = '';
    data.map(dataItem => datas += dataItem.name + ', ');
    return datas;
   }

// movidetail data 
    movieDetailLayout(
        `${POSTER_PATH}${movieDetailData.poster_path}`,
            movieDetailData.title,
            movieDetailData.original_title,
            movieDetailData.overview,
            dataMap(movieDetailData.genres),
            dataMap(movieDetailData.credits.cast.slice(0,10)),
            movieDetailData.name='Todd Phillips',
            starReview(Math.round(movieDetailData.vote_average/2)),
            'movidetailsapp'
        );
        
       
    // similar Movies list
    similarMovies.results.slice(0,4).forEach((similarMovie)=>{
         movieCard(
            `${POSTER_PATH}${similarMovie.poster_path}`,
            similarMovie.original_title,
            similarMovie.title,
            similarMovie.popularity,
            createGenres(similarMovie.genre_ids),
            starReview(Math.round(similarMovie.vote_average/2)),
            similarMovie.id,
            'similarMovies' 
        )
    })
});