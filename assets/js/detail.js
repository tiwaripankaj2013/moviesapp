import {showmodal} from './modalpopup.js';
import  {generes,latestMovie,trandingMovie,popularMovie,movieDetail,similarMovie,actorDetail,actorFimography,searchMovie} from './api.js';
import {movieCard,movieDetailLayout} from './card.js';

const POSTER_PATH = `https://image.tmdb.org/t/p/w500/`;

let allMovie = [];

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
        window.location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

const id = findGetParameter('id');

allMovie.push(
        generes(),
        latestMovie(),
        trandingMovie(),
        popularMovie(),
        movieDetail(id),
        similarMovie(id),
        actorDetail(),
        actorFimography(),
        searchMovie()
        );

Promise.all(allMovie).then(data => {
    let generesData = data.shift();
    let latestMovieData = data.shift();
    let trendingMovieData = data.shift();
    let popularMovieData = data.shift();
    let movieDetailData = data.shift();
    let similarMovies = data.shift();
    let actorDetail = data.shift();
    let actorFimography = data.shift();
    let searchMovie= data.shift();

   
   function createGenres(genresid){
    const currentGenres = generesData.genres.filter(genre => genresid.includes(genre.id) )
    let genereName = '';
    currentGenres.map(item => genereName += item.name + ', ');
    genereName = genereName.slice(0, -2); 
    return genereName;
   }

//    get array data name to data map method
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
            movieDetailData.name,
            starReview(Math.round(movieDetailData.vote_average/2)),
            'movidetailsapp'
        );
        
    // similar Movies list
    // console.log(similarMovies);
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

// rating function create 5 star
function starReview(rateing){
    let rate = ''
    for(let i =1 ; i<=5 ;i++){
        rate = `${rate} <i class= "fa ${rateing >= i ?'fa-star' : 'fa-star-o'}"></i>`
    }
    return rate;
}


//document.querySelectorAll('body')[0].addEventListener('click',showmodal);
// document.getElementsByClassName('modal__open')[0].addEventListener('click', showmodal);

