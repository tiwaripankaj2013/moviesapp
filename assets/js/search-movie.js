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
    let latestMovieData = data.shift().results;
    let trandingMovieData = data.shift().results;
    let popularMovieData = data.shift().results;

    let allMovies = [...latestMovieData,...trandingMovieData,...popularMovieData];
   
    // let uniqueMoviesID = [...new Set(allMovies.map(id =>id.id))];

  //  console.log(uniqueMoviesID);
    // console.log(getUniqueMovie(allMovies))
    localStorage.setItem('allMovies', JSON.stringify(allMovies));
    const localdata = JSON.parse(localStorage.getItem('allMovies'))
     
   localdata.forEach((movie,indx) =>{
        
   })
   

   let  createGenres = (genresid) =>{
    const currentGenres = generesData.genres.filter(genre => genresid.includes(genre.id) )
    let genereName = '';
    currentGenres.map(item => genereName += item.name + ', ');
    genereName = genereName.slice(0, -2); 
    return genereName;
   }

    allMovies.slice(0,12).forEach((allMovie) => {
        movieCard(
          `${POSTER_PATH}${allMovie.backdrop_path}`,
            allMovie.original_title,
            allMovie.title,
            createGenres(allMovie.genre_ids),
            utility.starReview(Math.round(allMovie.vote_average/2)),
            allMovie.id,
            'searcMovieResult'
        )
    });



// search movies 


var inputvalue = document.querySelector('.searchMovie').addEventListener('keyup', getValue);
var filterRating = document.querySelector('.filterMovie').addEventListener('input',filterValue);


function filterValue(e){
    let filterValue = this.value;
    document.querySelector('.filterValue').innerHTML=filterValue;
    console.log(filterValue);
    if(filterValue !== ''){
        var localMovies = localdata.filter((singlemovie)=>{
          
            let singleMovieAvg = Math.round(singlemovie.vote_average);
                console.log(singlemovie);

                if(singleMovieAvg == filterValue){
                    
                    console.log(singlemovie);
                    return singlemovie;

                }

                
           // return Math.round(singlemovie.vote_average).includes(filterValue);
        });

       
      
        localMovies.slice(0,12).forEach((localMovie) => {
            movieCard(
              `${POSTER_PATH}${localMovie.backdrop_path}`,
                localMovie.original_title,
                localMovie.title,
                createGenres(localMovie.genre_ids),
                utility.starReview(Math.round(localMovie.vote_average/2)),
                localMovie.id,
                'localmovieResult'
            )
        });
    }
    
}
 

function  getValue(e){
  
   let inputvalues = this.value.toLowerCase();

   if(inputvalues != ''){
   var localMovies =  localdata.filter( (singlemovie) => {
       return singlemovie.title.toLowerCase().includes(inputvalues)
    });

    localMovies.slice(0,12).forEach((localMovie) => {
        movieCard(
          `${POSTER_PATH}${localMovie.backdrop_path}`,
            localMovie.original_title,
            localMovie.title,
            createGenres(localMovie.genre_ids),
            utility.starReview(Math.round(localMovie.vote_average/2)),
            localMovie.id,
            'localmovieResult'
        )
    });
}
e.preventDefault();
}








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
   
}).catch(error => console.log(error));
// .catch(error => document.querySelector('body').innerHTML=error);