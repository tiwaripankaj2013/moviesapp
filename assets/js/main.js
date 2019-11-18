import  {movieApi} from './movie-api.js';
import {movieCard} from './movie-card.js';
import {modalPopup} from './modal-popup-layout.js';
import {utility} from './utility.js';

const POSTER_PATH = `https://image.tmdb.org/t/p/w500/`;

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
   
   let  createGenres = (genresid) =>{
    const currentGenres = generesData.genres.filter(genre => genresid.includes(genre.id) )
    let genereName = '';
    currentGenres.forEach(item => genereName += item.name + ', ');
    genereName = genereName.slice(0, -2); 
    return genereName;
   }

/* latest movies data create card layouts */
    latestMovieData.results.slice(0,4).forEach((latestMovie) => {
        movieCard(
          `${POSTER_PATH}${latestMovie.backdrop_path}`,
            latestMovie.original_title,
            latestMovie.title,
            createGenres(latestMovie.genre_ids),
            utility.starReview(Math.round(latestMovie.vote_average/2)),
            latestMovie.id,
            'temp-data'
        )
    });
  
 /* trending  movies data create card layouts */   
    trendingMovieData.results.slice(0,4).forEach((trendingMovie) => {
         movieCard(
            `${POSTER_PATH}${trendingMovie.backdrop_path}`,
            trendingMovie.original_title,
            trendingMovie.title,
            createGenres(trendingMovie.genre_ids),
            utility.starReview(Math.round(trendingMovie.vote_average/2)),
            trendingMovie.id,
            'trendingMovies'
        )
    });
/* popular  movies data create card layouts */
    popularMovieData.results.slice(0,4).forEach((popularMovie) => {
         movieCard(
            `${POSTER_PATH}${popularMovie.backdrop_path}`,
            popularMovie.original_title,
            popularMovie.title,
            createGenres(popularMovie.genre_ids),
            utility.starReview(Math.round(popularMovie.vote_average/2)),
            popularMovie.id,  
            'mostWatchedMovies'
        )
    });
    // modalpopup Data  
    
   // get movieId
let modalPopupShow = (e) =>{
    let modalImgClassget = document.querySelectorAll('.movie__figure');
    let showModal=(e) =>{
       let moviId = e.target.getAttribute('data-id');
    //    console.log(moviId);
       movieApi.movieDetail(moviId).then((res,error)=>{ 
        let movieName = res.original_title;
        let movieImage =`${POSTER_PATH}${res.poster_path}`;
        let movieImgTitle= res.title;
        let modalMovieDesc=res.overview;
        let modalMovieGenres=utility.dataMap(res.genres);
        let modalMovieCast=utility.dataMap(res.credits.cast.slice(0,10)); 
        let modalMovieDirector=utility.directorName(res);
        let modalRating= utility.starReview(Math.round(res.vote_average/2));
           modalPopup(movieName,movieImage,movieImgTitle,modalMovieDesc,
            modalMovieGenres,modalMovieCast,modalMovieDirector,modalRating,'body');
            console.log(res);
       });
     
       return moviId;
       
    }
    for (let i = 0; i < modalImgClassget.length; i++) {
        modalImgClassget[i].addEventListener('click', showModal,false);
    }
    
}
modalPopupShow();
   
})
.catch(error => document.querySelector('body').innerHTML=error);