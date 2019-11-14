import  {generes,latestMovie,trandingMovie,popularMovie,movieDetail,actorDetail,actorFimography,searchMovie} from './movie-api.js';
import {movieCard} from './movie-card.js';
import {starReview} from './common.js';

const POSTER_PATH = `https://image.tmdb.org/t/p/w500/`;

let allMovie = [];
const moviForm = document.querySelector('#search-movie-form');
 const movinameInput= document.querySelector('#searchMovie');

//  load eventlistner

loadEventLIstner();
    function loadEventLIstner(){
    moviForm.addEventListener('submit',getMovieName);
    movinameInput.addEventListener('keyup',filterMovies);
}

// get moviename
function getMovieName(e){
    if(movinameInput.value === ''){
        alert('please enter movie namae');
    }
    movinameInput.value='';
    e.preventDefault();
}

function filterMovies(e){
    const movinames=e.target.value.toLowerCase();
    console.log(movinames);
}


let search_query='action';

let moviId = 475557;
allMovie.push(
        generes(),
        latestMovie(),
        trandingMovie(),
        popularMovie(),
        movieDetail(moviId),
        actorDetail(),
        actorFimography(),
        searchMovie(search_query)
        );

Promise.all(allMovie).then(data => {
    let generesData = data.shift();
    let latestMovieData = data.shift();
    let trendingMovieData = data.shift();
    let popularMovieData = data.shift();
    let movieDetailData = data.shift();
    let actorDetail = data.shift();
    let actorFimography = data.shift();
    let searchMovieData= data.shift();


    //console.log(searchMovieData);
    function dataMap(data){
        let datas = '';
        data.map(dataItem => datas += dataItem.name + ', ');
        return datas;
       }

   function createGenres(genresid){
    const currentGenres = generesData.genres.filter(genre => genresid.includes(genre.id) )
    let genereName = '';
    currentGenres.map(item => genereName += item.name + ', ');
    genereName = genereName.slice(0, -2); 
    return genereName;
   }

//    search movie 

searchMovieData.results.slice(0,12).forEach((searchMovie) => {
    movieCard(
      `${POSTER_PATH}${searchMovie.poster_path}`,
        searchMovie.original_title,
        searchMovie.title,
        searchMovie.popularity,
        createGenres(searchMovie.genre_ids),
        starReview(Math.round(searchMovie.vote_average/2)),
        searchMovie.id,
        'temp-data'
    )
});
        
});


 

