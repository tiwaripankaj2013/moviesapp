import  {generes,latestMovie,trandingMovie,popularMovie,movieDetail} from './movie-api.js';
import {movieCard} from './movie-card.js';
import {modalPopup} from './modal-popup-layout.js';
import {starReview} from './common.js';

const POSTER_PATH = `https://image.tmdb.org/t/p/w500/`;

let allMovie = [];
allMovie.push(
        generes(),
        latestMovie(),
        trandingMovie(),
        popularMovie(),
        );

Promise.all(allMovie).then(data => {
    let generesData = data.shift();
    let latestMovieData = data.shift();
    let trendingMovieData = data.shift();
    let popularMovieData = data.shift();
    

    //  get array data name to data map method
       function dataMap(data){
        let datas = '';
        data.map(dataItem => datas += dataItem.name + ', ');
        return datas;
       }

   let  createGenres = (genresid) =>{
    const currentGenres = generesData.genres.filter(genre => genresid.includes(genre.id) )
    let genereName = '';
    currentGenres.map(item => genereName += item.name + ', ');
    genereName = genereName.slice(0, -2); 
    return genereName;
   }

    latestMovieData.results.slice(0,4).forEach((latestMovie) => {
        movieCard(
          `${POSTER_PATH}${latestMovie.poster_path}`,
            latestMovie.original_title,
            latestMovie.title,
            latestMovie.popularity,
            createGenres(latestMovie.genre_ids),
            starReview(Math.round(latestMovie.vote_average/2)),
            latestMovie.id,
            'temp-data'
        )
    });
  
    trendingMovieData.results.slice(0,4).forEach((trendingMovie) => {
         movieCard(
            `${POSTER_PATH}${trendingMovie.poster_path}`,
            trendingMovie.original_title,
            trendingMovie.title,
            trendingMovie.popularity,
            createGenres(trendingMovie.genre_ids),
            starReview(Math.round(trendingMovie.vote_average/2)),
            trendingMovie.id,
            'trendingMovies'
        )
    });

    popularMovieData.results.slice(0,4).forEach((popularMovie) => {
         movieCard(
            `${POSTER_PATH}${popularMovie.poster_path}`,
            popularMovie.original_title,
            popularMovie.title,
            popularMovie.popularity,
            createGenres(popularMovie.genre_ids),
            starReview(Math.round(popularMovie.vote_average/2)),
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

       movieDetail(moviId).then((res,err)=>{

        let movieName = res.original_title;
        let movieImage =`${POSTER_PATH}${res.poster_path}`;
        let movieImgTitle= res.title;
        let modalMovieDesc=res.overview;
        let modalMovieGenres=dataMap(res.genres);
        let modalMovieCast=dataMap(res.credits.cast.slice(0,10));
        let modalMovieDirector=res.title='Todd Phillips';

        let modalRating= starReview(Math.round(res.vote_average/2));
        // console.log(res);
           modalPopup(movieName,movieImage,movieImgTitle,modalMovieDesc,
            modalMovieGenres,modalMovieCast,modalMovieDirector,modalRating,'body');
       })
      
       return moviId;
       
    }
    for (let i = 0; i < modalImgClassget.length; i++) {
        modalImgClassget[i].addEventListener('click', showModal,false);
    }
    
}
modalPopupShow();
   
});

 

